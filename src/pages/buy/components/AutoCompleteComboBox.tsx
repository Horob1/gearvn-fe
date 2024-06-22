// import { Fragment, useEffect, useState } from "react";
// import { Combobox, Transition } from "@headlessui/react";
// import { FaChevronDown } from "react-icons/fa";
// import { DistrictType } from "../../../hook/District";
// import { WardType } from "../../../hook/Ward";

// export type Province = {
//   province_id: string;
//   province_name: string;
//   province_type: string;
// };

// type ProvinceComboboxProps = {
//   provinces: Province[];
//   setProvince: React.Dispatch<React.SetStateAction<Province>>;
// };

// export function ProvinceCombobox({
//   provinces,
//   setProvince,
// }: ProvinceComboboxProps) {
//   const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     setProvince(selectedProvince);
//   }, [selectedProvince, setProvince]);

//   const filteredProvinces =
//     query === ""
//       ? provinces
//       : provinces.filter((province) =>
//           province.province_name
//             .toLowerCase()
//             .replace(/\s+/g, "")
//             .includes(query.toLowerCase().replace(/\s+/g, ""))
//         );

//   return (
//     <div className="w-52">
//       <Combobox value={selectedProvince} onChange={setSelectedProvince}>
//         <div className="relative mt-1">
//           <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
//             <Combobox.Input
//               className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 outline-none text-gray-900 focus:ring-0"
//               displayValue={(province: Province) => province.province_name}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//               <FaChevronDown
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </Combobox.Button>
//           </div>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setQuery("")}
//           >
//             <Combobox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
//               {filteredProvinces.length === 0 && query !== "" ? (
//                 <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
//                   Không có kết quả.
//                 </div>
//               ) : (
//                 filteredProvinces.map((province) => (
//                   <Combobox.Option
//                     key={province.province_id}
//                     className={({ active }) =>
//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                         active ? "bg-red-400" : "text-gray-900"
//                       }`
//                     }
//                     value={province}
//                   >
//                     {({ selected }) => (
//                       <>
//                         <span
//                           className={`block truncate ${
//                             selected ? "font-medium" : "font-normal"
//                           }`}
//                         >
//                           {province.province_name}
//                         </span>
//                       </>
//                     )}
//                   </Combobox.Option>
//                 ))
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   );
// }

// type DistrictComboboxProps = {
//   districts: DistrictType[];
//   setCurrentDistrict: React.Dispatch<React.SetStateAction<DistrictType>>;
// };
// export function DistrictCombobox({
//   districts,
//   setCurrentDistrict,
// }: DistrictComboboxProps) {
//   const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     setCurrentDistrict(selectedDistrict);
//   }, [selectedDistrict, setCurrentDistrict]);

//   const filteredProvinces =
//     query === ""
//       ? districts
//       : districts.filter((districts) =>
//           districts.district_name
//             .toLowerCase()
//             .replace(/\s+/g, "")
//             .includes(query.toLowerCase().replace(/\s+/g, ""))
//         );

//   return (
//     <div className="w-52">
//       <Combobox value={selectedDistrict} onChange={setSelectedDistrict}>
//         <div className="relative mt-1">
//           <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
//             <Combobox.Input
//               className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 outline-none text-gray-900 focus:ring-0"
//               displayValue={(district: DistrictType) => district.district_name}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//               <FaChevronDown
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </Combobox.Button>
//           </div>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setQuery("")}
//           >
//             <Combobox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
//               {filteredProvinces.length === 0 && query !== "" ? (
//                 <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
//                   Không có kết quả.
//                 </div>
//               ) : (
//                 filteredProvinces.map((district) => (
//                   <Combobox.Option
//                     key={district.district_id}
//                     className={({ active }) =>
//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                         active ? "bg-red-400" : "text-gray-900"
//                       }`
//                     }
//                     value={district}
//                   >
//                     {({ selected }) => (
//                       <>
//                         <span
//                           className={`block truncate ${
//                             selected ? "font-medium" : "font-normal"
//                           }`}
//                         >
//                           {district.district_name}
//                         </span>
//                       </>
//                     )}
//                   </Combobox.Option>
//                 ))
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   );
// }
// type WardComboboxProps = {
//   wards: WardType[];
//   setCurrentWard: React.Dispatch<React.SetStateAction<WardType>>;
// };
// export function WardCombobox({ wards, setCurrentWard }: WardComboboxProps) {
//   const [selectedWard, setSelectedWard] = useState(wards[0]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     setCurrentWard(selectedWard);
//   }, [selectedWard, setCurrentWard]);

//   const filteredProvinces =
//     query === ""
//       ? wards
//       : wards.filter((ward) =>
//           ward.ward_name
//             .toLowerCase()
//             .replace(/\s+/g, "")
//             .includes(query.toLowerCase().replace(/\s+/g, ""))
//         );

//   return (
//     <div className="w-52">
//       <Combobox value={selectedWard} onChange={setSelectedWard}>
//         <div className="relative mt-1">
//           <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
//             <Combobox.Input
//               className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 outline-none text-gray-900 focus:ring-0"
//               displayValue={(ward: WardType) => ward.ward_name}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//               <FaChevronDown
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </Combobox.Button>
//           </div>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setQuery("")}
//           >
//             <Combobox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
//               {filteredProvinces.length === 0 && query !== "" ? (
//                 <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
//                   Không có kết quả.
//                 </div>
//               ) : (
//                 filteredProvinces.map((ward) => (
//                   <Combobox.Option
//                     key={ward.ward_id}
//                     className={({ active }) =>
//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                         active ? "bg-red-400" : "text-gray-900"
//                       }`
//                     }
//                     value={ward}
//                   >
//                     {({ selected }) => (
//                       <>
//                         <span
//                           className={`block truncate ${
//                             selected ? "font-medium" : "font-normal"
//                           }`}
//                         >
//                           {ward.ward_name}
//                         </span>
//                       </>
//                     )}
//                   </Combobox.Option>
//                 ))
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   );
// }
