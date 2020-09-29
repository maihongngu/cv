import React from "react"

function Footer() {
    return (
        <footer className="footer has-background-dark">
            <div className="content has-text-centered has-text-white">
                <i>
                    <sup><i className="fas fa-quote-left"></i></sup>
                        Bạn không có quyền ghét khi bạn chưa từng yêu, bởi chỉ có những người rất yêu mới biết cảm giác đau đớn khi nơi ấy thay đổi để rồi biến nổi buồn thành sự căm ghét. 
                    <sup><i className="fas fa-quote-right"></i></sup>
                    &nbsp; <sub>- &nbsp;Stephen Curry</sub>
                </i>
                <p className="has-text-grey-light">
                    © {new Date().getFullYear()} Mai Hong Ngu
                </p>
            </div>
        </footer>
    )
}

export default Footer