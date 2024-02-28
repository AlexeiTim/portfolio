import {
  CERTIFICATE_MAIN_COURSE,
  CERTIFICATE_PRESCHOOL_1,
  CERTIFICATE_PRESCHOOL_2,
  CERTIFICATE_VUE_COURSE,
} from "../constants/images";
import { Certificate } from "../types/Certificate";

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "RS-PRE-SCHOOL 2021",
    description: "2021-07-05 - 2021-08-31",
    image: CERTIFICATE_PRESCHOOL_1,
    link: "https://app.rs.school/certificate/mfu2czan",
  },
  {
    id: 2,
    title: "RS-PRE-SCHOOL 2022",
    description: "2022-05-31 - 2022-09-03",

    image: CERTIFICATE_PRESCHOOL_2,
    link: "https://app.rs.school/certificate/3yzldfnq",
  },
  {
    id: 3,
    title: "RS-SCHOOL Main course 2023",
    description: "2022-09-04 - 2023-03-07",
    image: CERTIFICATE_MAIN_COURSE,
    link: "https://app.rs.school/certificate/lsjazky1",
  },
  {
    id: 4,
    title: "IT-CODE Vue Frontend",
    description: "2023-05-05 - 2023-07-05",
    image: CERTIFICATE_VUE_COURSE,
    link: "https://disk.yandex.by/i/lFdpc_wh54GeEQ",
  },
];
