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
  booking_id: string;
  category: 'Customer-to-Garage' | 'Garage-to-Customer' | 'Garage-to-Garage';
  source_name: string;
  source_phone_number: string;
  source_location: string;
  destination_name: string;
  destination_phone_number: string;
  destination_location: string;
  pickup_time: string;
  timestamp: string;
  expireTime: string;
};
