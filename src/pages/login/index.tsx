import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";
import { authCredentials } from "@/providers";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};