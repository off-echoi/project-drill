import { theme } from 'styles/theme';
import { Label, RadioIcon } from 'components';
import { StyledToggleInput } from './toggleInputStyles';
import { ToggleInputProps } from './toggleInput';

export const Radio = ({ labelContent, className = '', ...props }: ToggleInputProps) => (
  <StyledToggleInput className={props.checked ? `active ${className}` : className}>
    <input type="radio" {...props} />
    <Label htmlFor={props.id}>
      <RadioIcon
        size={16} //
        color={props.checked ? theme.color.primary1 : theme.color.gray7}
        checked={props.checked}
        className="icon"
      />
      {labelContent}
    </Label>
  </StyledToggleInput>
);
