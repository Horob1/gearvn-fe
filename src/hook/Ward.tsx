// import axios from "axios";
// import { useEffect, useState } from "react";

// export type WardType = {
//   ward_id: number;
//   ward_name: string;
// };

// type WardProps = {
//   id: number;
// };

// const Ward = ({ id }: WardProps) => {
//   const [wards, setWards] = useState<WardType[]>([
//     {
//       ward_id: 0,
//       ward_name: "",
//     },
//   ]);
//   const [currentWard, setCurrentWard] = useState<WardType>({
//     ward_id: 0,
//     ward_name: "",
//   });

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;
//     const fetchApi = async () => {
//       try {
//         const res = await axios.get(
//           "https://vapi.vnappmob.com/api/province/ward/" + id,
//           {
//             signal,
//           }
//         );
//         setWards(res.data.results);
//       } catch (error) {
//         //
//       }
//     };
//     if (id) fetchApi();
//     return () => {
//       controller.abort();
//     };
//   }, [id]);
//   return { wards, currentWard, setCurrentWard };
// };

// export default Ward;
