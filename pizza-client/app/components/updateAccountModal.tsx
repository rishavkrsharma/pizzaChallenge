import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { serverBaseUrl } from "../constants";
import toast from "react-hot-toast";
import { FormEvent, useEffect, useState } from "react";

interface UpdateAccountModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: any;
  refetchUsers: () => void;
}

interface FormState {
  name: string;
  age: number | "";
  gender: string;
}

export default function UpdateAccountModal({
  open,
  setOpen,
  user,
  refetchUsers,
}: UpdateAccountModalProps): JSX.Element {
  const [formState, setFormState] = useState<FormState>({
    name: user.name || "",
    age: user.age || "",
    gender: user.gender || "Male",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (user) {
      setFormState({
        name: user.name,
        age: user.age,
        gender: user.gender,
      });
    }
  }, [user]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formState.name) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formState.name)) {
      newErrors.name = "Name must contain only alphabetical characters";
    }

    if (formState.age === "" || formState.age < 0) {
      newErrors.age = "Age is required and must be non-negative";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(`${serverBaseUrl}/update-user/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        toast.success(`User updated successfully!`, {
          duration: 10000,
        });
        refetchUsers();
        setOpen(false);
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.log("Error updating user:", error);
      toast.error("An error occurred while updating the user");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <p className="mb-2 text-center text-lg font-semibold">
                Update User Details
              </p>
              <form className="space-y-4" onSubmit={handleUpdate}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="age"
                      id="age"
                      min="0"
                      value={formState.age === "" ? "" : formState.age}
                      onChange={handleInputChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.age && (
                      <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formState.gender}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to disclose</option>
                  </select>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex mt-2 w-full justify-center rounded-md bg-white-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
