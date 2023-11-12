import { theme } from 'styles/theme';
import { Label, CheckBoxIcon } from 'components';
import { ToggleInputProps } from './toggleInput';
import { StyledToggleInput } from './toggleInputStyles';

export const CheckBox = ({ labelContent, className = '', ...props }: ToggleInputProps) => {
  return (
    <StyledToggleInput className={props.checked ? `active ${className}` : className}>
      <input type="checkbox" {...props} />
      <Label htmlFor={props.id}>
        <CheckBoxIcon
          size={16} //
          color={props.checked ? theme.color.primary1 : theme.color.gray7}
          checked={props.checked}
          className="icon"
        />
        {labelContent}
      </Label>
    </StyledToggleInput>
  );
};
