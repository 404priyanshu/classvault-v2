export type AuthActionState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: {
    email?: string[];
    password?: string[];
  };
};

export const initialAuthActionState: AuthActionState = { status: "idle" };
