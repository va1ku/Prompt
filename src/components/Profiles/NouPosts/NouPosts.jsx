import classes from "./NouPosts.module.css";
import React from "react";
import { Field, Form, Formik } from "formik";


const NouPosts = (props) => {

	const onSubmit = (formData, { setSubmitting, resetForm,}) => {
		props.addPost(formData.post)
		resetForm();
		setSubmitting(false)
	};

	return (
		<Formik initialValues={{ post: "" }} onSubmit={onSubmit}>
			{(methods) => (
				<Form >
					<div className={classes.NouPosts}>
						<Field
							name="post"
							className={`${classes.newPost} ${methods.errors.post ? classes.error : ''}`}
							value={methods.values.post}
							onChange={methods.handleChange}>
						</Field>
						<button type="submit" className={classes.addPost} disabled={methods.isSubmitting}></button>
					</div>
					{methods.errors.post && methods.touched && <div>{methods.errors.post}</div>}
				</Form>)}
		</Formik>
	)
};

export default NouPosts;