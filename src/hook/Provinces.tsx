// import { useEffect, useState } from "react";
// import { Province } from "../pages/buy/components/AutoCompleteComboBox";
// import axios from "axios";

// const UseProvinces = () => {
//   const [provinces, setProvinces] = useState<Province[]>([
//     {
//       province_name: "",
//       province_type: "",
//       province_id: "",
//     },
//   ]);
//   const [selectedProvince, setSelectedProvince] = useState<Province>({
//     province_name: "",
//     province_type: "",
//     province_id: "",
//   });

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;
//     const fetchApi = async () => {
//       try {
//         const res = await axios.get("https://vapi.vnappmob.com/api/province", {
//           signal,
//         });
//         setProvinces(res.data.results);
//       } catch (error) {
//         //
//       }
//     };
//     fetchApi();
//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return {
//     provinces,
//     setProvinces,
//     selectedProvince,
//     setSelectedProvince,
//   };
// };

// export default UseProvinces;
