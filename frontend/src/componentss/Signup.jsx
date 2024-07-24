import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Signup = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isRegister, setIsRegister] = useState(true);
  const [accountType, setAccountType] = useState("seeker");
  const [errMsg, setErrMsg] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {};

  return open ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
      <Card className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">
            {isRegister ? "Create Account" : "Account Sign In"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-center py-4">
            <Button
              variant={accountType === "seeker" ? "solid" : "outline"}
              onClick={() => setAccountType("seeker")}
              className="flex-1"
            >
              User Account
            </Button>
            <Button
              variant={accountType !== "seeker" ? "solid" : "outline"}
              onClick={() => setAccountType("company")}
              className="flex-1"
            >
              Company Account
            </Button>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                {...register("email", { required: "Email Address is required!" })}
                error={errors.email ? errors.email.message : ""}
              />
            </div>

            {isRegister && (
              <div className="flex gap-2">
                <div className={accountType === "seeker" ? "w-1/2" : "w-full"}>
                  <div className="grid gap-2">
                    <Label htmlFor={accountType === "seeker" ? "firstName" : "name"}>
                      {accountType === "seeker" ? "First Name" : "Company Name"}
                    </Label>
                    <Input
                      id={accountType === "seeker" ? "firstName" : "name"}
                      type="text"
                      placeholder={accountType === "seeker" ? "eg. James" : "Company name"}
                      {...register(accountType === "seeker" ? "firstName" : "name", {
                        required:
                          accountType === "seeker"
                            ? "First Name is required"
                            : "Company Name is required",
                      })}
                      error={
                        accountType === "seeker"
                          ? errors.firstName?.message
                          : errors.name?.message
                      }
                    />
                  </div>
                </div>

                {accountType === "seeker" && (
                  <div className="w-1/2">
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Wagonner"
                        {...register("lastName", { required: "Last Name is required" })}
                        error={errors.lastName?.message}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2">
              <div className={isRegister ? "w-1/2" : "w-full"}>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: "Password is required!" })}
                    error={errors.password?.message}
                  />
                </div>
              </div>

              {isRegister && (
                <div className="w-1/2">
                  <div className="grid gap-2">
                    <Label htmlFor="cPassword">Confirm Password</Label>
                    <Input
                      id="cPassword"
                      type="password"
                      placeholder="Password"
                      {...register("cPassword", {
                        validate: (value) =>
                          value === getValues("password") || "Passwords do not match",
                      })}
                      error={errors.cPassword?.message}
                    />
                  </div>
                </div>
              )}
            </div>

            {errMsg && (
              <span role="alert" className="text-sm text-red-500 mt-0.5">
                {errMsg}
              </span>
            )}

            <div className="mt-2">
              <Button type="submit" className="w-full">
                {isRegister ? "Create Account" : "Login Account"}
              </Button>
            </div>
          </form>

          <div className="mt-4">
            <p className="text-sm text-gray-700">
              {isRegister ? "Already have an account?" : "Don't have an account?"}
              <span
                className="text-sm text-blue-600 ml-2 hover:text-blue-700 hover:font-semibold cursor-pointer"
                onClick={() => setIsRegister((prev) => !prev)}
              >
                {isRegister ? "Login" : "Create Account"}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  ) : null;
};

export default Signup;
