import { useFormik } from "formik";
import classes from "./ProfilesInfoForm.module.css"



const ProfilesInfoForm = ({ setEditMode, Profile, pushToNewProfile, Errors }) => {


	const validate = (value) => {

		const errors = {}

		if (value.fullName === '') {
			errors.fullName = 'required'
		}

		return errors
	}
	const formik = useFormik({
		initialValues: Profile,
		validate,
		onSubmit: (newProfile) => {
			pushToNewProfile(newProfile, formSubmit)
		}
	})


	const formSubmit = () => {
		setEditMode(false)
	}


	return (<div className={classes.form_wrapper}>
		<form className={classes.form} onSubmit={formik.handleSubmit}>

			<label> Full name:
				<input type='text'
					id="fullName"
					name="fullName"
					value={formik.values.fullName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.fullName || formik.touched.fullName ? <div className={classes.errors}>{formik.errors.fullName}</div> : null}
			</label>
			<label> About Me:
				<input type='text'
					id="aboutMe"
					name="aboutMe"
					value={formik.values.aboutMe}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</label>

			<label >Looking for a job:
				<input type="checkbox"
					id="lookingForAJob"
					name="lookingForAJob"
					defaultChecked={formik.values.lookingForAJob}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</label>
			<label >looking for a job description:
				<textarea type="text"
					className={classes.text_area}
					id="lookingForAJobDescription"
					name="lookingForAJobDescription"
					value={formik.values.lookingForAJobDescription}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</label>
			<label className={classes.contacts}>Contacts:
				{Object.keys(Profile.contacts).map((key) => {
					return <label key={key} > {key}:
						<input type="text"
							id={`contacts.${key}`}
							name={`contacts.${key}`}
							value={formik.values.contacts[key]}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</label>
				})}
			</label>
			{Errors 
			?<div className={classes.errors}><ul>{Errors.map((message) =><li>{message}</li>)}</ul></div>
			: null
			}

			<button type="submit">push</button>
		</form>
		<div><button onClick={() => { setEditMode(false) }}>Back</button></div>
	</div>)
};

export default ProfilesInfoForm;