// import axios from "axios";
// import { useEffect, useState } from "react";

// export type DistrictType = {
//   district_id: number;
//   district_name: string;
// };

// type DistrictProps = {
//   id: string;
// };

// const District = ({ id }: DistrictProps) => {
//   const [districts, setDistricts] = useState<DistrictType[]>([
//     {
//       district_id: 0,
//       district_name: "",
//     },
//   ]);
//   const [currentDistrict, setCurrentDistrict] = useState<DistrictType>({
//     district_id: 0,
//     district_name: "",
//   });

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;
//     const fetchApi = async () => {
//       try {
//         const res = await axios.get(
//           "https://vapi.vnappmob.com/api/province/district/" + id,
//           {
//             signal,
//           }
//         );
//         setDistricts(res.data.results);
//       } catch (error) {
//         //
//       }
//     };
//     if (id) fetchApi();
//     return () => {
//       controller.abort();
//     };
//   }, [id]);
//   return { districts, currentDistrict, setCurrentDistrict };
// };

// export default District;
