export default function Footer() {
  return (
    <>
      <div className="flex flex-row justify-between px-10 py-10 bg-white dark:bg-[#00283a] rounded-lg max-md:flex-col max-md:items-center max-md:gap-3">
        <div>
          <h2>
            <span className="text-red-600 dark:text-[#70ba65] font-bold">
              ©
            </span>{" "}
            2022 All Rights Reserved.
          </h2>
        </div>
        <div>
          <h2>
            <span className="text-red-600 dark:text-[#70ba65] font-bold">
              Email:
            </span>{" "}
            admin@bslthemes.com
          </h2>
        </div>
      </div>
    </>
  );
}
