import { ErrorMessage, Field, Form, Formik } from "formik"
import classes from "./Login.module.css"
import { Navigate } from "react-router-dom"
import { RequiredField } from "../../utils/validators/validators"







const Login = (props) => {
	let onSubmit = (values, action) => {
		let { login, password, remember } = values;
		props.login(login, password, remember)
		action.setSubmitting(false)
	}
	let Input = ({ field, ...props }) => {
		return (
			<div className={classes.loginInputWrapper}>
				<input  type="text" {...field} {...props} />
				<ErrorMessage name={field.name} />
			</div>
		)
	}

	if (props.isAuth) {
		return <Navigate to="/profile" />
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.loginWrapper}>
				<h1>Sign In </h1>
				<Formik onSubmit={onSubmit} initialValues={{ login: '', password: '', remember: false }}>
					{({touched,errors,handleChange, values,isSubmitting}) => (
						<Form>
							<h2>login:</h2>
							<Field name='login'
								className={`${classes.loginInput} ${touched.login && errors.login ? classes.errors : ""}`}
								onChange={handleChange}
								value={values.login}
								component={Input}
								validate={RequiredField()} />

							<h2>password:</h2>
							<Field
								className={`${classes.loginInput} ${touched.password && errors.password ? classes.errors : ""}`}
								name='password' type="password"
								onChange={handleChange}
								value={values.password}
								component={Input}
								validate={RequiredField()} />

							<div>{props.LoginErrors}</div>
							<Field
								className={classes.checkbox}
								name='remember' type="checkbox"
								checked={values.remember}
								onChange={handleChange}
								component="input" />
							<span style={{ margin: "0 10px" }}>remember me</span>

							<div className={classes.submitWrapper}>
								<button type="submit" className={classes.SubmitButton} disabled={isSubmitting}>
									Sign In</button>
							</div>
						</Form>
					)}
				</Formik>

			</div>
		</div>
	)
}



export default Login;