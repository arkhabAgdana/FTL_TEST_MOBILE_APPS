export type RootStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  HomeScreen:
    | {
        room: string;
        startTime: string;
        endTime: string;
      }
    | undefined;
  RoomBookingScreen: undefined;
  ScheduleMeetingScreen: undefined;
  // DetailOrderScreen: { orderId: string };
  // NewOrderScreen: undefined;
  // EditOrderScreen: { orderId: string };
};
