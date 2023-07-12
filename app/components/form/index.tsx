import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DesktopFooter from "../footerForm/desktop-footer";
import MobileFooter from "../footerForm/mobile-footer";

type Props = {
  terms: boolean;
  setTerms: any;
};

export default function Form({ terms, setTerms }: Props): JSX.Element {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validationSchema = yup.object({
    fullName: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().required("Required"),
    mobile: yup.string(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handlePhoneChange = (val: string) => {
    setValue("mobile", val);
  };

  const onSubmit = () => isValid && router.push("/success");

  return (
    <form
      className="mt-[61px] w-full md:w-2/3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
          <label
            htmlFor="fullName"
            className={`${
              errors.fullName ? "text-warning" : "text-dark-grey"
            } block text-sm font-medium leading-6`}
          >
            Full Name
          </label>
        </div>

        <div>
          <input
            className={`${
              errors.fullName
                ? "ring-warning"
                : "ring-sonic-silver focus:ring-dark-grey"
            } bg-white-smoke md:bg-white block w-full rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
            id="fullName"
            type="text"
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className="text-warning text-xs font-semibold ml-2">
              {errors.fullName.message?.toString()}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
          <label
            htmlFor="email"
            className={`${
              errors.email ? "text-warning" : "text-dark-grey"
            } block text-sm font-medium leading-6`}
          >
            Email
          </label>
        </div>

        <div>
          <input
            className={`${
              errors.email
                ? "ring-warning"
                : "ring-sonic-silver focus:ring-dark-grey"
            } bg-white-smoke md:bg-white block w-full rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
            id="email"
            type="email"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-warning text-xs font-semibold ml-2">
              {errors.email.message?.toString()}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mb-6">
        <PhoneInput
          country={"gb"}
          onChange={handlePhoneChange}
          specialLabel="Mobile"
        />
      </div>

      <div className="mb-6">
        <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5 z-10">
          <label
            htmlFor="password"
            className={`${
              errors.password ? "text-warning" : "text-dark-grey"
            } block text-sm font-medium leading-6`}
          >
            Password
          </label>
        </div>

        <div className="relative mt-2 rounded-md">
          <input
            className={`${
              errors.password
                ? "ring-warning"
                : "ring-sonic-silver focus:ring-dark-grey"
            } bg-white-smoke md:bg-white block w-full rounded-full border-0 px-4 py-3.5 text-dark-grey shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-5">
            {!showPassword ? (
              <EyeIcon
                className="h-5 w-5 text-sonic-silver"
                aria-hidden="true"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeSlashIcon
                className="h-5 w-5 text-sonic-silver"
                aria-hidden="true"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        {errors.password ? (
          <p className="text-warning text-xs font-semibold ml-2">
            {errors.password.message?.toString()}
          </p>
        ) : null}
      </div>

      <div className="relative flex items-center mt-7.5">
        <div className="flex h-6 items-center">
          <input
            id="offers"
            aria-describedby="offers-description"
            name="offers"
            type="checkbox"
            className="h-6 w-6 rounded border-gray-300 text-light-yellow focus:ring-light-yellow"
            onChange={() => setTerms(!terms)}
          />
        </div>
        <div className="ml-4 text-sm leading-3">
          <span id="offers-description" className="text-dark-grey text-xs">
            Tick this box to confirm you've read and agreed to our{" "}
            <span className="underline">Terms</span> and{" "}
            <span className="underline">Privacy Policy</span>.
          </span>
        </div>
      </div>

      <hr className="mt-[25px] border-foggy-grey md:hidden" />
      <p className="text-xxs font-light flex text-center justify-center items-center text-foggy-grey my-3 md:hidden">
        {" "}
        <LockClosedIcon
          className="h-2.5 w-2.5 text-foggy-grey mr-1.5"
          aria-hidden="true"
        />{" "}
        Secured by{" "}
        <Image
          className="ml-1.5"
          src="/vm_logo.svg"
          width={76}
          height={18}
          alt="logo"
          priority
        />
      </p>

      <DesktopFooter terms={terms} />
      <MobileFooter terms={terms} />
    </form>
  );
}
