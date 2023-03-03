import { useFormik } from "formik";

export default function FormikEx3Component(){
    function VerifyUserDetails(userDetails)
    {
        const errors={};

        if(userDetails.UserName == ""){
            errors.UserName = "User Name Required";
        }

        if(userDetails.Age == ""){
            errors.Age = "Age Required";
        }

        return errors;
    }
    const formik = useFormik({
        initialValues:{
            UserName: '',
            Age: 0,
            Email: ''
        },
        validate: VerifyUserDetails,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input name="UserName" onChange={formik.handleChange} type="text"/></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>

                <dt>Age</dt>
                <dd><input name="Age" onChange={formik.handleChange} type="text"/></dd>

                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>Email</dt>
                <dd><input name="Email" onChange={formik.handleChange} type="text"/></dd>
                <dd className="text-danger">{formik.errors.Email}</dd>
            </dl>
                <button>Register</button>
            </form>
        </div>
    )
}