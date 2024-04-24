import { ChangeEventHandler } from "react";

type FormFieldType = {
  labelName: string;
  placeholder: string;
  inputType: any;
  isTextArea: boolean;
  value: string;
  handleChange: Function;
  disable?: boolean;
};

export default function FormField({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  disable,
  handleChange,
}: FormFieldType) {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={(e) => handleChange(e)}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <>
          {inputType === "select" ? (
            <>
              <select
                name="categories-add"
                id="categories-add"
                defaultValue="0"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
              >
                <option value="0">Foods</option>
                <option value="1">Drinks</option>
              </select>
            </>
          ) : (
            <input
              disabled={disable}
              required
              value={value}
              onChange={(e) => handleChange(e)}
              type={inputType}
              step="0.1"
              placeholder={placeholder}
              className="py-[15px] disabled:text-slate-500 sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
            />
          )}
        </>
      )}
    </label>
  );
}
