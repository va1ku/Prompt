import ChatItem from "./ChatItem/ChatItem";
import ChatsItem from "./ChatsItem/ChatsItem";
import classes from "./Dialogs.module.css";
import React from "react";
import { Field, Form, Formik } from "formik";
import {RequiredField} from "../../utils/validators/validators.js"



const Dialogs = (props) => {
	let dialogsElement = props.dialogsData.map(el => <ChatsItem key={el.id} id={el.id} name={el.name} />);
	let ChatsElement = props.Chats.map(el => <ChatItem key={el.id} text={el.text} />);

	return (

		<div className={classes.Dialogs}>
			<div className={classes.chats}>
				<h1 className={classes.title}>Chats:</h1>
				{dialogsElement}
			</div>

			<div className={classes.chat}>
				<div className={classes.messages}>
					{ChatsElement}
				</div>
				<DialogsChatsForm AddMessages={props.AddMessages} />
			</div>
		</div>

	)
};


let DialogsChatsForm = (props) => {
	let onSubmit = (formData, { setSubmitting, resetForm }) => {
		props.AddMessages(formData.message);
		resetForm();
		setSubmitting(false);
	};

	let Textarea = ({field,className, ...props}) =>{
		return(
			<div className={className}>
				<textarea className={classes.input} {...field} {...props}/>
			</div>
		)
	}
	
	return (
		<Formik initialValues={{ message: "", }} onSubmit={onSubmit} >
			{(methods) =>
			(<Form className={classes.wrapper}>
				<Field name="message"
					value={methods.values.message}
					className={`${classes.inputWrapper} ${methods.errors.message ? classes.error : ''}`}
					onChange={methods.handleChange}
					placeholder="Enter your message"
					onBlur={methods.handleBlur}
					component={Textarea}
					validate={RequiredField()} />
				<button type="submit" className={classes.but} disabled={methods.isSubmitting}>Отправить</button>
			</Form>)
			}
		</Formik>
	)
}
export default Dialogs;