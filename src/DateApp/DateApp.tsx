import *as yup from "yup";
import { Formik, Form, FormikProps } from "formik";
import { useState } from "react";
import moment from "moment";

interface My_date {
    initial_date_time?: moment.Moment,
    final_date_time?: moment.Moment,
};

export const DateApp = () => {
    
    const [calendar, setCalendar] = useState({} as My_date);

    const initial_values = {
    } as My_date;

    const validation_schema = yup.object().shape({
        initial_date_time: yup.date().min(new Date()).required(),
        final_date_time: yup.date().min(new Date()).required(),

    });

    const submit_handler = (values: My_date) => {
        setCalendar(values);
    };

    return (
        <div className="MyApp">
            <Formik initialValues={initial_values} onSubmit={submit_handler} validationSchema={validation_schema} >
                {(formikProps: FormikProps<My_date>) => <Form>
                    <input
                        name="initial_date_time"
                        type="datetime-local"
                        value={formikProps.values.initial_date_time ? formikProps.values.initial_date_time.toString() : ""}
                        onChange={formikProps.handleChange}
                    />
                    <input
                        name="final_date_time"
                        type="datetime-local"
                        value={formikProps.values.final_date_time ? formikProps.values.final_date_time.toString() : ""}
                        onChange={formikProps.handleChange}
                    />
                    <button type="submit">Add</button>
                </Form>
                }
            </Formik>
            <h2>
                <ol>
                    <li>from:{calendar.initial_date_time} to:{calendar.final_date_time} </li>
                </ol>
            </h2>
        </div>
    )
}
