import styled from 'styled-components'
import {ButtonCustom, InputEmail} from '../utils/styledElems.js'
import {Component} from 'react'
import {createForm, createFactory, createField} from 'micro-form'

const FormStyled = styled.form`
  && {
    width: 350px;
    margin: 3em auto 0;
    text-align: center;
  }
`

const Root = styled.div`
  && {
  }
`

const SubmitButtonStyled = styled(ButtonCustom)`
  && {
    margin: 30px auto 0;
  }
`

const Form = createForm(
  ({
    state,
    valid,
    validateForm,
    getPayload,
    resetForm,
    children,
    submitForm,
    setState,
  }) => (
    <FormStyled
      autoComplete="on"
      onSubmit={e => {
        e.preventDefault()
        validateForm() &&
          submitForm(getPayload())
            .then((res, error) => {
              resetForm()
              return res.status === 200 ? setState() : ''
            })
            .catch(err => console.log('error', err))
      }}
    >
      {children}
    </FormStyled>
  ),
)

const Email = createField({
  name: 'email',
  initialValue: '',
})(
  ({
    name,
    value,
    valid,
    updateField,
    validateField,
    validate,
    color,
    ...userDefinedProps
  }) => (
    <div>
      {/* <label htmlFor={name}>Email</label> */}

      <InputEmail
        id="email"
        placeholder="Enter your email here"
        margin="none"
        fullWidth={true}
        disableUnderline={true}
        bcolor={color}
        name={name}
        label={name}
        value={value}
        type="email"
        onChange={e => {
          updateField(e.target.value)
          validateField()
        }}
        required
      />
    </div>
  ),
)

class SubmitFormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
    }
  }

  submitForm = data =>
    fetch('/api/submit', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

  render() {
    const {color = '#5bb89f'} = this.props
    return (
      <Root>
        <Form
          color={color}
          submitForm={this.submitForm}
          setState={() => {
            this.setState({submitted: true})
            setTimeout(() => this.setState({submitted: false}), 3000)
          }}
        >
          <Email color={color} />
          <SubmitButtonStyled
            type="submit"
            variant="contained"
            color={color}
            bcolor={color}
          >
            {(this.state.submitted && 'Thank you for signing up!') || 'SUBMIT'}
          </SubmitButtonStyled>
        </Form>
      </Root>
    )
  }
}

export default SubmitFormComponent
