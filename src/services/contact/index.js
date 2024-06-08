import { requestData } from "../axios/requestData";

export const createEmail = async (
  params = {
    name: "",
    last_name: "",
    email: "",
    phone: "",
    course_type: "",
    reason: "",
    exam_type: "",
    date: "",
  }
) => {
  const {
    name,
    last_name,
    phone,
    course_type,
    email,
    reason,
    exam_type,
    date,
  } = params;

  const data = {
    name,
    last_name,
    phone,
    course_type,
    email,
    reason,
    exam_type,
    date,
  };

  let url = `/contact`;

  try {
    const response = await requestData({
      method: "POST",
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return { error };
  }
};
