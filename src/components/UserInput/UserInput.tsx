import type { ChangeEvent } from "react";
import { InputTypeEnum } from "../../enums/InputType.enum";
import classes from './UserInput.module.scss';

function UserInput(props: {
  onInputChange: (key: InputTypeEnum, value: string) => void,
}) {
  return (
    <section className={classes['user-input']}>
      <div className={classes['user-input__input-group']}>
        <div>
          <label htmlFor="initial-investment">Initial  investment</label>
          <input
            required
            id="initial-investment"
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              {props.onInputChange(InputTypeEnum.INITIAL_INVESTMENT, event.target.value)}
            }
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            required
            id="annual-investment"
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              {props.onInputChange(InputTypeEnum.ANNUAL_INVESTMENT, event.target.value)}
            }
          />
        </div>
      </div>
      <div className={classes['user-input__input-group']}>
        <div>
          <label htmlFor="expected-return">Expected return</label>
          <input
            required
            id="expected-return"
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              {props.onInputChange(InputTypeEnum.EXPECTED_RETURN, event.target.value)}
            }
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            required
            id="duration"
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              {props.onInputChange(InputTypeEnum.DURATION, event.target.value)}
            }
          />
        </div>
      </div>
    </section>
  );
}

export default UserInput;
