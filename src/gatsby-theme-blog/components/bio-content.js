import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Tôi tên là{" "}
    <Styled.a href="https://www.linkedin.com/in/thuongthanhto/">
      Thuong To
    </Styled.a>
    <br />
    Tôi sẽ chia sẻ những kiến thức của tôi về lập trình Javascript
  </Fragment>
)
