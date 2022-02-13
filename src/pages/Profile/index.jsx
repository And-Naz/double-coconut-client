import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp"
import Edit from "../../components/AuthComponent/Edit";

const blunkPasword = "******"

function Profile() {
	const { user, login, logout } = useContext(AuthContext)
	const navigate = useNavigate()
	const { request } = useHttp()
	const onSubmit = async data => {
		if (window.confirm("Do you want change data?")) {
			const newData = { ...user, ...data }
			if (newData.password === blunkPasword) {
				delete newData.password
			}
			const retVal = await request("/auth/edit", "PATCH", newData)
			if (retVal.status === 200) {
				debugger
				await logout()
				await login(retVal.data.token, newData)
			}
		}
		navigate("/feed")
	}

	const onReset = data => {
		navigate("/feed")
	}

	return (
		<section>
			<Edit user={{ ...user, password: blunkPasword }} onSubmit={onSubmit} onReset={onReset} />
		</section>
	);
}
export default Profile;