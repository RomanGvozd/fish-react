import React from "react"
import cx from "classnames"

import "./CardCategories.scss";

const CardCategories = ({title, subtitle, className, ...props})=>{

    return (
        <div {...props} className={cx("card", className)}>
			<div className="card__footer">
				<h2 className="card__title">{title}</h2>
				<p className="card__subtitle">{subtitle}</p>
			</div>
		</div>
    )
}

export default CardCategories;