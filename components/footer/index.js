import React, { memo, useCallback, useState } from "react";
import { Modal } from "antd";

// import logo from "@assets/logo.png";

import css from "./styles.module.scss";

const Footer = () => {
	const [infoDialogVisible, setInfoDialogVisible] = useState(false);

	// toggle team's info dialog
	const toggleInfoDialog = useCallback(() => {
		setInfoDialogVisible(!infoDialogVisible);
	}, [infoDialogVisible]);

	// Show team's info dialog
	const onTeamInfoCick = useCallback(
		(e) => {
			e.preventDefault();
			toggleInfoDialog();
		},
		[toggleInfoDialog]
	);

	return (
		<>
			<div className={css.footer}>
				<span className={css.copyright}>
					Copyright@2020 &nbsp;
					<a href="#" onClick={onTeamInfoCick}>
						G2CTeam
					</a>
				</span>
				<div className={css.info}>
					<span>Version 1.0.0</span>
					<span _css_="divider">|</span>
					<span>Powered by</span>
					<a href="http://www.toshiba-tsdv.com/" target="blank">
						&nbsp;Toshiba
					</a>
				</div>
			</div>
			<Modal visible={infoDialogVisible} onCancel={toggleInfoDialog} footer={null} closable={false}>
				<div className={css["modal-info"]}>
					<img src="/logo.png" alt="" />
					<div className={css["info-title"]}>Cloud Pocket</div>
					<div className={css["info-content"]}>
						<div>Copyright@2020 G2CTeam powered by Toshiba </div>
						<div>Version 1.0.0, Build 100</div>
						<div>
							Developed by:&nbsp;
							<a href="mailto:ba.machung@toshiba-tsdv.com">Mac Hung Ba</a>,&nbsp;
							<a href="mailto:quang.nguyenvan@toshiba-tsdv.com">Nguen Van Quang</a>,&nbsp;
							<a href="mailto:duy.vuthai@toshiba-tsdv.com">Vu Thai Duy</a>,&nbsp;
							<a href="mailto:toan.vuquoc@toshiba-tsdv.com">Vu Quoc Toan</a>,&nbsp;
							<a href="mailto:phong.dovan@toshiba-tsdv.com">Do Van Phong</a>,&nbsp;
							<a href="mailto:toan.tranduc@toshiba-tsdv.com">Tran Duc Toan</a>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default memo(Footer);
