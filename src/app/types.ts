export type User = {
  name: string;
  profile_pic_url: string;
};

export type FilterType = {
  title: string;
};

export type BookingsType = {
  booking_id: string;
  booking_date: string;
};

export type TaskType = {
  id: string;
  customer_name: string;
  customer_phone_number: string;
  garage_name: string;
  customer_location: string;
  garage_location: string;
  garage_phone_number: string;
  pickup_time: string;
  timestamp: string;
};
