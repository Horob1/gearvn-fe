import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Thanh toán bằng tiền mặt (Khi giao hàng)",
    index: 0,
  },
  {
    name: "Thanh toán bằng momo",
    index: 1,
  },
  {
    name: "Thanh toán bằng zalo pay",
    index: 2,
  },
];
type ExampleProps = {
  setOrderMethod: React.Dispatch<React.SetStateAction<number>>;
};
export default function Example({ setOrderMethod }: ExampleProps) {
  const [selected, setSelected] = useState(plans[0]);
  useEffect(() => {
    setOrderMethod(selected.index);
  }, [selected, setOrderMethod]);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Than toán</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-red-400/60 ring-offset-2 ring-offset-red-400-300"
                      : ""
                  }
                  ${checked ? "bg-red-500 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          ></RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
