import { Input } from "./Input";

export const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
        return <Input {...rest} />
    default:
        return null;
  }
}