import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Header, Container, SideMenu, ImageContainer } from './styles';

const BmdOs: React.FC = () => {

	const BmdOs = [
		{ id: 410549438, signature: 'YML7ikasS0GH7%2BXURC3lafIvGeE%3D', meta: 6, label: "HUD-Top Bar", preview: "https://blackmagicdesign.invisionapp.com/static-signed/live-embed/369271486/410549438/6/latest/mB80EuzSzvdAKLVvnsHkyl7WeViv53OMAScTGDjGMlE26zPF4MBw8alE3NSCiLwXFP68z931j5GaatlEh5EE6T3jwlE/HUD---Top-Bar-2x.png" },
		{ id: 411374108, signature: 'GXwhKvilOzkjVR6lLEUyA7Op7mI%3D', meta: 2, label: "HUD - Storage", preview: "https://blackmagicdesign.invisionapp.com/static-signed/live-embed/369271486/411374108/2/latest/fReMkuHnmMSfhqd8tWrsMh3UuyVQsJJnCes0MNyVFGlkRn1HQVZByfHGlEXtaXa6bMqPMOIsZ72wRgIodBE3OsAlE/HUD---Storage-2x.png" },
		{ id: 411766014, signature: '2BQjLrrJDeUPZCoWvi6WZgfYlnk%3D', meta: 5, label: "HUD - EFT Widget", preview: "https://blackmagicdesign.invisionapp.com/static-signed/live-embed/369271486/411766014/5/latest/n0a7Qqs1E6Jk5duCTU4zdZB2MIQktAJuv5WusJFCRlEnhLqGULil7KpNFt2OkPPk3gqz65305upD2UDdIGDtETQlE/HUD---EFT-Widget-2x.png" },
		{ id: 424704391, signature: 'jm7%2FeHB5HwEwZNLdzXB1WbPCc6w%3D', meta: 4, label: "HUD - ISO", preview: "https://blackmagicdesign.invisionapp.com/static-signed/live-embed/369271486/424704391/4/latest/ScF5Zu97ak7KPAkRNlbzVoienbqAE5DyEuz6kaIbdQl3uLlwHiwN3Uv4MlER4OIt7Mts3SgPyK9BiK1QnULXTlEAlE/HUD---ISO-2x.png" },
		{ id: 424703493, signature: 'sjIMMP6YOWNjcG0uVl7q7qTwk%2Fo%3D', meta: 4, label: "HUD - White Balance", preview: "https://blackmagicdesign.invisionapp.com/static-signed/live-embed/369271486/424703493/4/latest/aThtZGsVHTBb8vOt4Tv1Y8QqqbySBLQRRE9IN7C73dLIA9FRR1lEGDelIBapMNzoxygQIBp4zJON6lEHYfnctTTwlE/HUD---White-Balance-2x.png" },
		{ id: 425692659, signature: 'Hh1AZBORq0a0nZSwUdNut%2BB7iwQ%3D', meta: 3, label: "HUD - FPS", preview: "https://blackmagicdesign.invisionapp.com/static-signed/live-embed/369271486/425692659/3/latest/xxkapDlEv17zuAEHaiw3JmY4wQ7C12Tk2nAMDV0dwM9yw8tKWKhbBDsFxlERA84rjwvAGHTRzM0cnJAHilEoplEHbglE/HUD---FPS-2x.png" },
		{ id: 425841525, signature: 'ncdRj389Gada0UyabK0mS3TL1i8%3D', meta: 1, label: "HUD - Shutter Speed & Iris", preview: "https://blackmagicdesign.invisionapp.com/static-signed/live-embed/369271486/425841525/1/latest/ylEXH9uIm6TECej1rKZ3VA2lEly9Y4TdEUdKej4HdAvJwRVp4hTN8sK23Yt59NAJGkKOEQDdYn3VXEFpIVMPSLowlE/HUD---Shutter-Speed-Iris-2x.png" }
	]

	const [ component, setComponent ] = useState(0);

	return (
		<>
			<Header>
				<div>
					<h1>BMD OS</h1>
					<Link to="/"><FaHome/></Link>
				</div>
			</Header>

			<Container>
				<SideMenu>
					{BmdOs.map((bmdos, i)=> (
						<>
							<li className={classNames("", component === i ? "active":"")} onClick={() => setComponent(i)}>{bmdos.label}</li>
						</>
					))}
				</SideMenu>

				<ImageContainer>
					{BmdOs.map((bmdos, i)=> (
						<>
							<img style={component === i ? {"display":"block"} : {"display":"none"}} key={i} src={bmdos.preview} alt="" width="100%"/>
						</>
					))}
				</ImageContainer>
			</Container>
		</>
	)
}

export default BmdOs;
