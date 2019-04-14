.sections-container,.strip-section .caption,.page-header>.inner,.page-footer .inner,.slider .caption,.strip .caption {
    max-width: calc(100% - 18px * 2);
    position: relative;
    width: 1100px;
    margin: 0 auto
}

.sections-container::after,.strip-section .caption::after,.page-header>.inner::after,.page-footer .inner::after,.slider .caption::after,.strip .caption::after {
    content: "";
    display: table;
    clear: both
}

.-hidden {
    display: none
}

.branding {
    font-size: 12px
}

.branding a {
    color: #353535;
    text-decoration: underline
}

.branding a:hover {
    text-decoration: underline
}

@font-face {
    font-family: "Custom Icons";
    src: url(/assets/custom-icons-f9c84931342c3afda17eec08172b252728a2a6c22dbc332d9155505b3de29b5c.woff) format("woff");
    font-weight: normal;
    font-style: normal
}

i.fa.fa-mywed::before {
    content: "\e900";
    position: relative;
    top: 1px;
    font-family: "Custom Icons";
    font-style: normal
}

.error-wrapper {
    margin-top: 6em;
    text-align: center
}

.lazy-image {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    line-height: 0
}

.lazy-image>.placeholder {
    z-index: 10 !important;
    width: 100%;
    transition: opacity 0.2s ease-out;
    opacity: 0.5;
    background-color: #ececec
}

.lazy-image>img {
    position: absolute;
    z-index: 5 !important;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transition: opacity 0.5s ease-out;
    opacity: 0
}

.lazy-image>img[data-sizes="auto"] {
    display: block;
    width: 100%
}

.lazy-image.-loaded>.placeholder {
    opacity: 0
}

.lazy-image.-loaded img {
    opacity: 1
}

a,a:hover {
    color: #353535;
    text-decoration: none
}

.logo {
    line-height: 0
}

.logo img.lazyload,.logo img.lazyloading {
    opacity: 0
}

.logo img.lazyloaded {
    transition: opacity 0.3s;
    opacity: 1
}

.logo .logo-link {
    display: inline-block;
    font-size: 0;
    line-height: 0
}

.logo .logo-with-placeholder {
    display: inline-block;
    position: relative;
    max-width: 100%
}

.logo .logo-placeholder {
    z-index: 0;
    width: 100%
}

.logo .logo-image {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.logo.-default {
    text-align: center
}

.message-box {
    position: relative;
    margin-bottom: 10px;
    padding: 15px;
    opacity: 0.8;
    background-color: #ccc;
    color: #333;
    font-size: 14px
}

.message-box.-success {
    background-color: #e5f9e7;
    color: #2c683f
}

.message-box.-error {
    background-color: #faf3c0;
    color: #996e00
}

.message-box>.close {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer
}

.message-box>.close:hover {
    opacity: 0.6
}

.message-box>.header {
    font-weight: bolder
}

.message-box .list {
    margin: 0;
    padding-left: 1.25em;
    list-style-type: disc
}

.modal {
    display: flex;
    visibility: hidden;
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    transition: opacity 0.15s, visibility 0s 0.15s, z-index 0s 0.15s;
    opacity: 0;
    background: rgba(85,85,85,0.7);
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.modal.-open {
    visibility: visible;
    z-index: 1100;
    overflow-x: hidden;
    overflow-y: auto;
    transition: opacity 0.15s, visibility 0s;
    opacity: 1;
    pointer-events: auto
}

.modal .modal-window {
    position: relative;
    flex-shrink: 0;
    margin: 5%;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
    text-align: left;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto
}

.modal .modal-close {
    position: absolute;
    top: 15px;
    right: 20px;
    transition: color 0.15s;
    color: rgba(53,53,53,0.5);
    font-size: 30px;
    line-height: 1;
    cursor: pointer
}

.modal .modal-close:hover {
    color: #353535
}

.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll
}

.action-section.-left {
    text-align: left
}

.action-section.-center {
    text-align: center
}

.action-section.-right {
    text-align: right
}

.action-section.-full {
    text-align: center
}

.action-section.-full>.button {
    display: block;
    width: 100%
}

.comparison-section {
    position: relative;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    line-height: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent
}

.comparison-section .before,.comparison-section .after {
    pointer-events: none
}

.comparison-section .before {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden
}

.comparison-section .before .lazy-image {
    max-width: none
}

.comparison-section .after {
    width: 100%;
    max-width: none
}

.comparison-section .drag {
    position: absolute;
    z-index: 210;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    margin-left: -1.5px;
    background: #fff;
    cursor: col-resize
}

.comparison-section .drag::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 9px;
    height: 60px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #fff
}

.comparison-section .drag .left-arrow,.comparison-section .drag .right-arrow {
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    margin-top: -6px;
    transition: margin 0.15s;
    border: 6px inset transparent
}

.comparison-section .drag .left-arrow {
    left: 50%;
    margin-left: -20px;
    border-right: 6px solid #fff
}

.comparison-section .drag .right-arrow {
    right: 50%;
    margin-right: -20px;
    border-left: 6px solid #fff
}

.comparison-section .drag:hover .left-arrow {
    margin-left: -24px
}

.comparison-section .drag:hover .right-arrow {
    margin-right: -24px
}

.divider-section {
    text-align: center
}

.divider-section>hr {
    border: 0;
    font-size: 0
}

.divider-section.-solid>hr {
    border-top-width: 1px;
    border-top-style: solid
}

.divider-section.-thick>hr {
    border-top-width: 5px;
    border-top-style: solid
}

.divider-section.-dashed>hr {
    border-top-width: 1px;
    border-top-style: dashed
}

.divider-section.-full>hr {
    width: auto
}

.divider-section.-short>hr {
    width: 31.5%
}

.divider-section.-left>hr {
    width: 10%;
    margin-left: 0
}

.divider-section.-dark>hr {
    border-top-color: #353535
}

.divider-section.-light>hr {
    border-top-color: rgba(53,53,53,0.25)
}

.divider-section.-blank>hr {
    height: 14px;
    margin-bottom: 0;
    border-color: transparent;
    font-size: 0
}

@media (max-width: 767px) {
    .divider-section.-blank>hr {
        height:0
    }
}

.divider-section.-dots>.label,.divider-section.-stars>.label {
    height: 50px;
    margin-bottom: 8px;
    color: #353535;
    font-size: 24px;
    line-height: 50px
}

.divider-section.-dots>.label::after,.divider-section.-stars>.label::after {
    display: inline-block;
    line-height: normal;
    vertical-align: middle
}

.divider-section.-dots>.label::after {
    content: "â€¢Â Â Â Â â€¢Â Â Â Â â€¢"
}

.divider-section.-stars>.label::after {
    content: "âœ½Â Â Â Â âœ½Â Â Â Â âœ½"
}

.instagram-section {
    line-height: 0
}

.instagram-section .media {
    display: inline-block;
    position: relative;
    overflow: hidden
}

.instagram-section .media:hover .thumbnail .meta {
    opacity: 1
}

.instagram-section .thumbnail {
    position: relative;
    transition: opacity 0.2s ease-out;
    opacity: 0;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover
}

.instagram-section .thumbnail::before {
    content: "";
    display: block;
    padding-top: 100%;
    overflow: hidden
}

.instagram-section .thumbnail.lazyloaded {
    opacity: 1
}

.instagram-section .meta {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    transition: opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    opacity: 0;
    background: rgba(0,0,0,0.55);
    will-change: opacity
}

.instagram-section .meta .likes {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 14px
}

@media all and (min-width: 375px) {
    .instagram-section .meta .likes {
        font-size:18px
    }
}

@media all and (min-width: 640px) {
    .instagram-section .meta .likes {
        font-size:24px
    }
}

.text-section,.wysiwyg {
    word-wrap: break-word
}

.text-section h2,.text-section h3,.wysiwyg h2,.wysiwyg h3 {
    margin-bottom: 0.5em;
    font-weight: inherit
}

.text-section h2:last-child,.text-section h3:last-child,.wysiwyg h2:last-child,.wysiwyg h3:last-child {
    margin-bottom: 0
}

.text-section ul,.wysiwyg ul {
    padding-left: 1.25em;
    list-style: none
}

.text-section ul li::before,.wysiwyg ul li::before {
    content: "â€”";
    display: inline-block;
    width: 1.25em;
    margin-left: -1.25em
}

.text-section ol,.wysiwyg ol {
    padding-left: 1.5em;
    list-style: decimal
}

.text-section ul,.text-section ol,.wysiwyg ul,.wysiwyg ol {
    margin: 1em 0
}

.text-section ul:last-child,.text-section ol:last-child,.wysiwyg ul:last-child,.wysiwyg ol:last-child {
    margin-bottom: 0
}

.text-section ul li,.text-section ol li,.wysiwyg ul li,.wysiwyg ol li {
    margin-bottom: 0.5em;
    list-style-position: outside
}

.text-section ul li:last-child,.text-section ol li:last-child,.wysiwyg ul li:last-child,.wysiwyg ol li:last-child {
    margin-bottom: 0
}

.text-section p+ul,.text-section p+ol,.wysiwyg p+ul,.wysiwyg p+ol {
    margin-top: -0.5em
}

.text-section blockquote,.wysiwyg blockquote {
    margin: 0 1.25em 1em;
    padding-left: 0.75em;
    border-left: 2px solid rgba(53,53,53,0.25);
    opacity: 0.7
}

.text-section strike,.wysiwyg strike {
    opacity: 0.5
}

.admin-link {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 5px;
    left: 10px;
    color: rgba(53,53,53,0.25);
    font-size: 24px
}

.admin-link>i {
    transition: color 0.2s, -webkit-transform 0.2s;
    transition: transform 0.2s, color 0.2s;
    transition: transform 0.2s, color 0.2s, -webkit-transform 0.2s
}

.admin-link.-visible {
    display: block
}

.admin-link:hover>i {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.back-to-top {
    visibility: hidden;
    position: fixed;
    z-index: 100;
    right: 10px;
    bottom: 30%;
    width: 40px;
    height: 40px;
    transition: opacity 0.15s, visibility 0s 0.15s;
    border-radius: 50%;
    opacity: 0;
    background: rgba(255,255,255,0.5);
    color: #353535;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    pointer-events: none
}

.back-to-top::-moz-selection {
    background: transparent
}

.back-to-top::selection {
    background: transparent
}

.back-to-top.-active {
    visibility: visible;
    transition: opacity 0.15s, visibility 0s;
    opacity: 1;
    pointer-events: auto
}

.blog.-masonry {
    margin: -18px
}

.blog.-masonry>.item {
    position: relative;
    width: calc(100% / 3);
    padding: 18px
}

.blog.-masonry .inner {
    background: rgba(53,53,53,0.05)
}

.blog.-masonry .content {
    padding: 20px
}

.blog.-masonry .title,.blog.-masonry .description {
    display: block;
    margin-bottom: 9px
}

.blog.-masonry .title {
    color: #353535;
    font-size: 19px
}

.blog.-masonry .description {
    font-size: 13px
}

.blog.-masonry .links {
    font-size: 13px
}

.row {
    width: auto;
    min-width: 0;
    margin: 0 -18px
}

.row::after {
    content: "";
    display: table;
    clear: both
}

.row .col-1,.row .col-2,.row .col-3,.row .col-4,.row .col-5,.row .col-6,.row .col-7,.row .col-8,.row .col-9,.row .col-10,.row .col-11,.row .col-12 {
    box-sizing: border-box;
    min-height: 1px;
    padding-right: 18px;
    padding-left: 18px;
    float: left
}

.row .col-1 {
    width: 8.33333%
}

@media (max-width: 767px) {
    .row .col-1 {
        width:100%
    }

    .row .col-1:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-2 {
    width: 16.66667%
}

@media (max-width: 767px) {
    .row .col-2 {
        width:100%
    }

    .row .col-2:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-3 {
    width: 25%
}

@media (max-width: 767px) {
    .row .col-3 {
        width:100%
    }

    .row .col-3:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-4 {
    width: 33.33333%
}

@media (max-width: 767px) {
    .row .col-4 {
        width:100%
    }

    .row .col-4:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-5 {
    width: 41.66667%
}

@media (max-width: 767px) {
    .row .col-5 {
        width:100%
    }

    .row .col-5:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-6 {
    width: 50%
}

@media (max-width: 767px) {
    .row .col-6 {
        width:100%
    }

    .row .col-6:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-7 {
    width: 58.33333%
}

@media (max-width: 767px) {
    .row .col-7 {
        width:100%
    }

    .row .col-7:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-8 {
    width: 66.66667%
}

@media (max-width: 767px) {
    .row .col-8 {
        width:100%
    }

    .row .col-8:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-9 {
    width: 75%
}

@media (max-width: 767px) {
    .row .col-9 {
        width:100%
    }

    .row .col-9:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-10 {
    width: 83.33333%
}

@media (max-width: 767px) {
    .row .col-10 {
        width:100%
    }

    .row .col-10:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-11 {
    width: 91.66667%
}

@media (max-width: 767px) {
    .row .col-11 {
        width:100%
    }

    .row .col-11:not(:last-child) {
        margin-bottom: 36px
    }
}

.row .col-12 {
    width: 100%
}

@media (max-width: 767px) {
    .row .col-12 {
        width:100%
    }

    .row .col-12:not(:last-child) {
        margin-bottom: 36px
    }
}

.order-modal .modal-window {
    padding: 60px 40px
}

.order-form {
    width: 80vw;
    max-width: 900px
}

.order-form form {
    margin-right: 80px
}

.order-form .message-box {
    margin-bottom: 30px
}

.order-form .order-form-header {
    margin-bottom: 50px;
    font-size: 40px;
    text-align: center
}

.order-form .order-form-hint {
    font-size: 14px;
    letter-spacing: 0.1em;
    text-align: center;
    text-transform: uppercase
}

.order-form .order-form-row {
    width: 100%;
    margin-bottom: 30px
}

.order-form .order-form-row::after {
    content: "";
    display: table;
    clear: both
}

.order-form .order-form-row:last-child {
    margin-bottom: 0
}

.order-form .order-form-label {
    width: calc(30% - 30px);
    margin-right: 30px;
    float: left
}

.order-form .order-form-input {
    width: 70%;
    float: right
}

.order-form .order-form-notice {
    margin-top: 10px;
    font-size: 14px
}

.order-form label {
    display: block;
    width: 100%;
    padding-top: 6px;
    font-size: 14px;
    text-align: right
}

.order-form input,.order-form textarea {
    font-size: 16px
}

.order-success {
    display: none;
    margin: 35px 100px;
    text-align: center
}

.order-success .order-success-icon {
    font-size: 75px
}

.order-success .order-success-text {
    font-size: 30px
}

.order-success .order-success-button {
    margin-top: 80px
}

.section-container {
    box-sizing: border-box
}

@media (max-width: 767px) {
    .section-container:last-child {
        padding-bottom:36px
    }
}

.section-container+.section-container {
    padding-top: 36px
}

.section-container.picture-section+.section-container.text-section,.section-container.text-section+.section-container.picture-section,.section-container.text-section+.section-container.message-form-section {
    padding-top: 9px
}

.sections-container {
    max-width: calc(100% - 18px * 2)
}

.sections-container:not(:last-child) {
    margin-bottom: 36px
}

@media (max-width: 767px) {
    .sections-container {
        padding-top:0;
        padding-bottom: 0
    }
}

.sections-container.-large-pad-before {
    padding-top: 54px
}

.sections-container.-large-pad-after {
    padding-bottom: 54px
}

.sections-container.-small-width {
    width: 768px
}

.sections-container.-medium-width {
    width: 1100px
}

.sections-container.-large-width {
    width: 1500px
}

.sections-container.-full-width {
    width: 100%
}

.sections-container.-max-width {
    width: 100%;
    max-width: 100%
}

.sections-container.lazyloaded {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover
}

.fame-section>.comments-list.-line .comment:first-child {
    padding-top: 30px;
    border-top: 1px solid rgba(53,53,53,0.25)
}

.fame-section>.comments-list .comment {
    padding: 30px 0
}

.fame-section>.comments-list .comment:first-child {
    padding-top: 0
}

.fame-section>.comments-list .comment:last-child {
    padding-bottom: 0;
    border-bottom: 0
}

.fame-section>.comments-list .comment .avatar {
    text-align: center
}

.fame-section>.comments-list .comment .avatar>img {
    border-radius: 50%
}

.fame-section>.comments-list .comment .info {
    margin-bottom: 0
}

.fame-section>.comments-list .comment .info::after {
    content: "";
    display: table;
    clear: both
}

.fame-section>.comments-list .comment .name {
    margin-right: 10px;
    float: left;
    color: #353535;
    font-size: 19px
}

.fame-section>.comments-list .comment .links>i {
    margin-right: 5px
}

.fame-section .nocomments {
    margin-bottom: 36px;
    text-align: center
}

.fame-section .nocomments>i {
    font-size: 60px
}

.fame-section .comment-form {
    padding-top: 18px
}

.fame-section .title {
    font-size: 19px
}

.fame-section .avatar-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center
}

.fame-section .avatar-container>.placeholder {
    width: 100%;
    margin: 0 auto 30px;
    padding-top: 100%;
    overflow: hidden;
    border-radius: 50%;
    background-image: url(/assets/defaults/avatar-4ca303046b6acd14308970d5ba62307dd20bd42c505fc9bf282d6713de4e1eda.svg);
    background-size: cover;
    text-align: center
}

.fame-section .avatar-container>.button {
    margin-bottom: 30px
}

.fame-section .avatar-container>.button>input[type="file"] {
    display: none
}

.comment-form-anchor {
    border-bottom: 1px dashed;
    color: #353535;
    text-decoration: none !important
}

.comment-form-anchor:hover {
    color: rgba(53,53,53,0.75);
    text-decoration: none !important
}

.labeled-divider-section {
    position: relative;
    border-bottom: 1px solid rgba(53,53,53,0.25)
}

.labeled-divider-section .label {
    display: inline;
    position: absolute;
    top: 0;
    left: 50%;
    max-width: calc(100% - 30px);
    padding: 1px 15px 2px;
    overflow: hidden;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background: #fff;
    color: rgba(53,53,53,0.7);
    font-size: 11px;
    letter-spacing: .1em;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap
}

.page-title-section {
    text-align: center
}

.page-title-section .page-title-section-close {
    margin-bottom: 9px
}

.page-title-section .page-title-section-close a {
    display: inline-block;
    color: rgba(53,53,53,0.7);
    font-size: 1.5em
}

.page-title-section .page-title-section-close a:hover,.page-title-section .page-title-section-close a:active {
    color: #353535
}

.page-title-section .page-title-section-header {
    max-width: 80%;
    margin: 0 auto;
    overflow: hidden;
    color: rgba(53,53,53,0.7);
    font-size: 11px;
    letter-spacing: .1em;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap
}

.picture-section {
    line-height: 0;
    text-align: center
}

.picture-section a {
    display: block;
    position: relative;
    transition: opacity 0.3s ease-in-out
}

.picture-section a:hover {
    opacity: 0.75
}

.picture-section .lazy-image {
    display: inline-block
}

.picture-section.-round .lazy-image,.picture-section.-round img,.picture-section.-round .placeholder {
    border-radius: 50%
}

.picture-section.-shadow .lazy-image {
    box-shadow: 2px 2px 15px rgba(0,0,0,0.5)
}

.picture-set-section.-masonry {
    text-align: center
}

.picture-set-section.-masonry>.item {
    position: relative
}

.picture-set-section.-masonry>.item .link {
    display: block;
    position: relative;
    overflow: hidden;
    text-decoration: none
}

.picture-set-section.-storyboard {
    position: relative
}

.picture-set-section.-storyboard .item {
    position: absolute;
    overflow: hidden
}

.picture-set-section.-storyboard .link {
    display: block;
    position: relative;
    overflow: visible;
    text-decoration: none
}

.picture-set-section.-storyboard .link:hover .caption {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
}

.picture-set-section.-squares {
    line-height: 0
}

.picture-set-section.-squares>.item {
    display: inline-block;
    position: relative
}

.picture-set-section.-squares>.item .link {
    display: block;
    position: relative;
    overflow: hidden;
    text-decoration: none
}

.picture-set-section.-list {
    text-align: center
}

.picture-set-section.-list .item {
    position: relative;
    line-height: 0
}

.picture-set-section.-list .item:last-child {
    padding-bottom: 0 !important
}

.picture-set-section.-list .lazy-image {
    display: inline-block;
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden
}

.slider-section {
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: height 0.3s
}

.slider-section ::-moz-selection {
    background: transparent
}

.slider-section ::selection {
    background: transparent
}

.slider-section .prev,.slider-section .next {
    position: absolute;
    z-index: 200;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%
}

.slider-section .prev {
    left: 0;
    cursor: url(/assets/icons/arrow_left_white-0d4a4b375c276ae57ae41d27d25fb70c8a4042a737ea96b625470f0c72bf45bd.png),auto
}

.slider-section .next {
    right: 0;
    cursor: url(/assets/icons/arrow_right_white-faae569ef0d65d2974802708260159a9318afb40157ee3a14342e6406a6718ae.png),auto
}

.slider-section .slide {
    visibility: hidden;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 1s,visibility 0s 1s;
    opacity: 0;
    cursor: pointer
}

.slider-section .slide.-visible {
    visibility: visible;
    z-index: 100;
    transition: opacity 1s,visibility 1s;
    opacity: 1
}

.slider-section .lazy-image {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.slider-section .lazy-image canvas {
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%20%20%20%20%20width%3D%2224px%22%20height%3D%2230px%22%20viewBox%3D%220%200%2024%2030%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%228%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%2216%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%3C%2Fsvg%3E") no-repeat scroll center center transparent
}

.slider-section .lazy-image.-loaded canvas {
    background: none
}

.strip-section {
    width: 100%;
    min-height: 400px
}

.strip-section.-resetting .slide {
    transition: none !important
}

.strip-section ::-moz-selection {
    background: transparent
}

.strip-section ::selection {
    background: transparent
}

.strip-section .prev,.strip-section .next {
    position: absolute;
    z-index: 200;
    top: 0;
    bottom: 0;
    height: 100%
}

.strip-section .prev {
    left: -100%;
    width: 133%;
    cursor: url(/assets/icons/arrow_left_white-0d4a4b375c276ae57ae41d27d25fb70c8a4042a737ea96b625470f0c72bf45bd.png),auto
}

.strip-section .next {
    right: -100%;
    width: 167%;
    cursor: url(/assets/icons/arrow_right_white-faae569ef0d65d2974802708260159a9318afb40157ee3a14342e6406a6718ae.png),auto
}

.strip-section .slides {
    width: 99999999px;
    height: 100%
}

.strip-section .slides::after {
    content: "";
    display: table;
    clear: both
}

.strip-section .slide {
    height: 100%;
    float: left;
    transition: opacity 0.5s;
    opacity: 0.25
}

.strip-section .slide.-current {
    opacity: 1
}

.strip-section .lazy-image canvas {
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%20%20%20%20%20width%3D%2224px%22%20height%3D%2230px%22%20viewBox%3D%220%200%2024%2030%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%228%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%2216%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%3C%2Fsvg%3E") no-repeat scroll center center transparent
}

.strip-section .lazy-image.-loaded canvas {
    background: none
}

.strip-section .caption {
    position: absolute;
    z-index: 200;
    right: 0;
    bottom: 18px;
    left: 0;
    color: #fff;
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.35)
}

.listing {
    margin: -15px;
    text-align: center
}

.listing .item {
    display: inline-block;
    position: relative;
    width: 33.33333%;
    padding: 15px;
    vertical-align: top
}

.listing .item .link {
    display: block;
    position: relative;
    text-decoration: none
}

.listing .title {
    font-size: 15px;
    font-weight: inherit;
    line-height: 1.2;
    text-transform: none
}

.listing .title span {
    display: inline-block;
    position: relative
}

.listing .title {
    padding: 11.5px 0;
    overflow: hidden;
    color: #353535;
    line-height: 1;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap
}

.listing .item .title span::after {
    content: "";
    display: block;
    visibility: hidden;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    -webkit-transform: scaleX(0) translate(0, 0);
    transform: scaleX(0) translate(0, 0);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #353535
}

.listing .item:hover .title span::after {
    visibility: visible;
    -webkit-transform: scaleX(1) translate(0, 0);
    transform: scaleX(1) translate(0, 0)
}

.listing .item .title span::after {
    bottom: -3px
}

body.lg-on {
    overflow: hidden !important
}

.lg-backdrop {
    z-index: 10040;
    background: #000
}

.lg-outer {
    z-index: 10050
}

.lg-outer .lg-img-wrap {
    padding: 0
}

.lg-outer .lg-thumb-outer {
    z-index: 10080;
    background: rgba(0,0,0,0.85)
}

.lg-outer .lg-pager-outer {
    z-index: 10080
}

.lg-outer .lg-thumb-item {
    transition: opacity 0.25s ease;
    border: 0;
    border-radius: 0;
    opacity: 0.75
}

.lg-outer .lg-thumb-item:hover {
    opacity: 1
}

.lg-outer .lg-toogle-thumb {
    background: rgba(0,0,0,0.85);
    color: #999
}

.lg-outer .lg-toogle-thumb:hover {
    color: #fff
}

.lg-outer .lg-item {
    top: 47px;
    height: calc(100% - 47px * 2) !important;
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%20%20%20%20%20width%3D%2224px%22%20height%3D%2230px%22%20viewBox%3D%220%200%2024%2030%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%228%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%2216%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%3C%2Fsvg%3E") no-repeat scroll center center transparent
}

.lg-outer .lg-item.lg-current {
    z-index: 10060
}

.lg-outer .lg-video .lg-video-play {
    z-index: 10080
}

.lg-outer #lg-dropdown-overlay {
    z-index: 10081
}

.lg-toolbar {
    z-index: 10082;
    background: rgba(0,0,0,0.45)
}

.lg-toolbar .lg-icon {
    color: #999
}

.lg-toolbar .lg-icon:hover {
    color: #fff
}

.lg-actions .lg-next,.lg-actions .lg-prev {
    z-index: 10080;
    background: rgba(0,0,0,0.45);
    color: #999
}

.lg-actions .lg-next:hover,.lg-actions .lg-prev:hover {
    color: #fff
}

.lg-sub-html {
    z-index: 10080;
    max-width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    background: rgba(0,0,0,0.45);
    color: #fff;
    font-size: 12px
}

@media (max-height: 640px) {
    .lg-sub-html {
        display:none
    }
}

.lg-progress-bar {
    z-index: 10083
}

*,*::after,*::before {
    box-sizing: border-box
}

html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0
}

body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    min-width: 768px;
    height: 100%;
    background: #fff;
    color: #353535;
    font-size: 15px;
    letter-spacing: .05em;
    line-height: 1.5
}

p {
    margin: 1em 0
}

p:first-child {
    margin-top: 0
}

p:last-child {
    margin-bottom: 0
}

img,object,embed {
    max-width: 100%
}

img {
    height: auto
}

h1,h2,h3 {
    margin: 0;
    color: #353535;
    font-weight: inherit;
    letter-spacing: 0;
    text-rendering: optimizeLegibility
}

h2 {
    font-size: 24px
}

h3 {
    font-size: 19px
}

ul,ol {
    margin: 0;
    padding: 0;
    list-style: none
}

form {
    position: relative
}

form.-disabled {
    pointer-events: none
}

form fieldset {
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 0;
    border: 0
}

form fieldset:last-child {
    margin-bottom: 0
}

form fieldset.notice {
    font-size: 11px
}

form input,form textarea {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 12px 14px;
    outline: none;
    background: transparent;
    box-shadow: none;
    color: inherit;
    font-size: 15px;
    vertical-align: top;
    -webkit-appearance: none
}

form input:not(:last-child),form textarea:not(:last-child) {
    margin-bottom: 5px
}

form input::-webkit-input-placeholder,form textarea::-webkit-input-placeholder {
    color: rgba(53,53,53,0.7)
}

form input:-ms-input-placeholder,form textarea:-ms-input-placeholder {
    color: rgba(53,53,53,0.7)
}

form input::-ms-input-placeholder,form textarea::-ms-input-placeholder {
    color: rgba(53,53,53,0.7)
}

form input::placeholder,form textarea::placeholder {
    color: rgba(53,53,53,0.7)
}

form textarea {
    resize: none
}

form input,form textarea {
    transition: border-color 0.3s;
    border: 1px solid rgba(53,53,53,0.25)
}

form input:not(:last-child),form textarea:not(:last-child) {
    margin-bottom: 0
}

form input:not(:last-child),form textarea:not(:last-child) {
    margin-bottom: -1px;
    border-bottom-color: transparent
}

form input:focus,form textarea:focus {
    border-color: rgba(53,53,53,0.5) !important
}

.button {
    display: inline-block;
    position: relative;
    width: auto;
    height: auto;
    margin: 0;
    padding: 15px 30px;
    overflow: hidden;
    border: 0;
    border-radius: 100px;
    outline: none;
    background: #353535;
    color: #fff;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer
}

.button::after {
    content: "";
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background 0.3s;
    background: transparent
}

.button:hover {
    color: #fff;
    text-decoration: none
}

.button:hover::after {
    background: rgba(255,255,255,0.15)
}

.button[disabled] {
    opacity: 0.5;
    cursor: not-allowed
}

body {
    overflow-y: scroll
}

.wysiwyg a {
    transition: color 0.3s;
    color: #777
}

.wysiwyg a:hover,.wysiwyg a.-hover {
    text-decoration: underline
}

.page-wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
    overflow: hidden
}

.logo {
    margin: 36px 0;
    text-align: center
}

.cover {
    width: 100%;
    max-width: 1500px;
    max-height: 450px;
    margin: 18px auto 36px
}

.social-links {
    margin: 18px 0;
    font-size: 24px;
    text-align: center
}

.social-links>.item {
    display: inline-block;
    margin: 0 0.5em
}

.social-links>.item:first-child {
    margin-left: 0
}

.social-links>.item:last-child {
    margin-right: 0
}

.social-links>.item>.link {
    transition: color 0.3s;
    outline: 0;
    color: #353535;
    text-decoration: none
}

.social-links>.item>.link:hover {
    color: rgba(53,53,53,0.75)
}

.page-main {
    flex-grow: 1;
    margin-top: 18px;
    margin-top: 36px
}

.page-footer {
    margin: 54px 0 18px;
    font-size: 13px;
    text-align: center
}

.page-footer .inner>*:not(:last-child) {
    margin-bottom: 15px
}

.footer-content p {
    margin: 0
}

.menu {
    min-width: 768px;
    transition: background 0.15s
}

.menu.-fixed {
    position: fixed;
    z-index: 300;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding-top: 16px;
    background: rgba(255,255,255,0.95)
}

.menu-list {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 11px;
    text-align: center
}

.menu-list .menu-item>.link {
    transition: color 0.3s;
    outline: 0;
    color: rgba(53,53,53,0.75);
    font-weight: inherit;
    letter-spacing: .1em;
    text-decoration: none
}

.menu-list .menu-item>.link:hover {
    color: #353535
}

.menu-list .menu-item.-active>.link,.menu-list .menu-item.-active-parent>.link {
    color: #353535
}

.menu-list>.menu-item {
    position: relative;
    margin-bottom: 16px;
    padding: 0 23px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase
}

.menu-list>.menu-item::after {
    position: absolute;
    color: rgba(53,53,53,0.25);
    font-family: Arial, sans-serif;
    content: "|";
    right: -2px
}

.menu-list>.menu-item.-undotted::after,.menu-list>.menu-item:last-child::after {
    content: none
}

.menu-list>.menu-item.-parent {
    cursor: pointer
}

.menu-list>.menu-item.-parent:hover>.submenu-list {
    visibility: visible;
    transition: opacity 0.3s, visibility 0.3s;
    opacity: 1
}

.menu-list>.menu-item.-parent>.link::after {
    content: " â–¾";
    color: rgba(53,53,53,0.25);
    font-weight: inherit
}

.menu-list .submenu-list {
    visibility: hidden;
    position: absolute;
    z-index: 400;
    top: 100%;
    left: 0;
    min-width: 100%;
    margin: 0 calc((46px / 2) - 16px);
    padding-top: 8px;
    transition: opacity 0.3s, visibility 0s 0.3s;
    opacity: 0;
    text-align: left
}

.menu-list .submenu-list>.menu-item {
    padding: 8px 16px;
    background: rgba(255,255,255,0.95);
    white-space: nowrap
}

.menu-list .submenu-list>.menu-item:first-child {
    padding-top: 16px
}

.menu-list .submenu-list>.menu-item:last-child {
    padding-bottom: 16px
}

.locale-selector {
    position: absolute;
    top: 5px;
    right: 0;
    font-size: 11px
}

.locale-selector>.item {
    display: inline-block;
    margin: 0 0.4em
}

.locale-selector>.item:first-child {
    margin-left: 0
}

.locale-selector>.item:last-child {
    margin-right: 0
}

.locale-selector>.item a {
    transition: color 0.3s;
    color: rgba(53,53,53,0.75)
}

.locale-selector>.item a:hover {
    color: #353535
}

.locale-selector>.item.-current span {
    color: #353535
}

.labeled-divider-section .label {
    font-size: 11px
}

.listing .item,.storyboard .item,.album-grid .item {
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
    opacity: 0
}

.listing .item.-visible,.storyboard .item.-visible,.album-grid .item.-visible {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1
}

.storyboard {
    position: relative
}

.storyboard .item {
    overflow: hidden
}

.storyboard .link {
    display: block;
    position: relative;
    overflow: visible;
    text-decoration: none;
    cursor: zoom-in
}

.storyboard .link:hover .caption {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
}

.storyboard .caption {
    position: absolute;
    z-index: 10;
    bottom: 0;
    width: 100%;
    padding: 15px 10px;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    transition: -webkit-transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    background-image: linear-gradient(transparent, rgba(0,0,0,0.75));
    color: #fff;
    font-size: 13px;
    line-height: 1.2;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4)
}

.storyboard .indicator {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat center url(/assets/icons/play-12dbfaeb70055127926e26ca398c666a9b44ea50bec7f611641cc22cb7922a1c.png)
}

.album-grid {
    margin: -9px;
    text-align: center
}

.album-grid .indicator {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat center url(/assets/icons/play-12dbfaeb70055127926e26ca398c666a9b44ea50bec7f611641cc22cb7922a1c.png)
}

.album-grid .item {
    display: inline-block;
    position: relative;
    width: 33.33333%;
    padding: 9px
}

.album-grid .item .link {
    display: block;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    cursor: zoom-in
}

.album-grid .item .link:hover .caption {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition: -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
}

.album-grid .item .caption {
    position: absolute;
    z-index: 10;
    bottom: 0;
    width: 100%;
    padding: 15px 10px;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    transition: -webkit-transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    background-image: linear-gradient(transparent, rgba(0,0,0,0.75));
    color: #fff;
    font-size: 11px;
    line-height: 1.2;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4)
}

.preloader {
    width: 100%;
    height: 100px;
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%20%20%20%20%20width%3D%2224px%22%20height%3D%2230px%22%20viewBox%3D%220%200%2024%2030%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(53%2C53%2C53)%22%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%228%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(53%2C53%2C53)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%2216%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(53%2C53%2C53)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%3C%2Fsvg%3E") no-repeat scroll center center transparent
}

.slider {
    position: relative;
    width: 100%;
    padding-bottom: 66.67%;
    overflow: hidden
}

.slider ::-moz-selection {
    background: transparent
}

.slider ::selection {
    background: transparent
}

.slider .prev,.slider .next {
    position: absolute;
    z-index: 200;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%
}

.slider .prev {
    left: 0;
    cursor: url(/assets/icons/arrow_left_white-0d4a4b375c276ae57ae41d27d25fb70c8a4042a737ea96b625470f0c72bf45bd.png),auto
}

.slider .next {
    right: 0;
    cursor: url(/assets/icons/arrow_right_white-faae569ef0d65d2974802708260159a9318afb40157ee3a14342e6406a6718ae.png),auto
}

.slider .slide {
    visibility: hidden;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 1s,visibility 0s 1s;
    opacity: 0;
    cursor: pointer
}

.slider .slide.-visible {
    visibility: visible;
    z-index: 100;
    transition: opacity 1s,visibility 1s;
    opacity: 1
}

.slider .lazy-image {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.slider .lazy-image canvas {
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%20%20%20%20%20width%3D%2224px%22%20height%3D%2230px%22%20viewBox%3D%220%200%2024%2030%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%228%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%2216%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%3C%2Fsvg%3E") no-repeat scroll center center transparent
}

.slider .lazy-image.-loaded canvas {
    background: none
}

.slider .caption {
    position: absolute;
    z-index: 200;
    right: 0;
    bottom: 18px;
    left: 0;
    color: #fff;
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.35)
}

.strip {
    width: 100%;
    height: 70vh;
    min-height: 400px
}

.strip.-resetting .slide {
    transition: none !important
}

.strip ::-moz-selection {
    background: transparent
}

.strip ::selection {
    background: transparent
}

.strip .prev,.strip .next {
    position: absolute;
    z-index: 200;
    top: 0;
    bottom: 0;
    height: 100%
}

.strip .prev {
    left: -100%;
    width: 133%;
    cursor: url(/assets/icons/arrow_left_white-0d4a4b375c276ae57ae41d27d25fb70c8a4042a737ea96b625470f0c72bf45bd.png),auto
}

.strip .next {
    right: -100%;
    width: 167%;
    cursor: url(/assets/icons/arrow_right_white-faae569ef0d65d2974802708260159a9318afb40157ee3a14342e6406a6718ae.png),auto
}

.strip .slides {
    width: 99999999px;
    height: 100%
}

.strip .slides::after {
    content: "";
    display: table;
    clear: both
}

.strip .slide {
    height: 100%;
    margin-right: 40px;
    float: left;
    transition: opacity 0.5s;
    opacity: 0.25
}

.strip .slide.-current {
    opacity: 1
}

.strip .lazy-image canvas {
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%20%20%20%20%20width%3D%2224px%22%20height%3D%2230px%22%20viewBox%3D%220%200%2024%2030%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%228%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.15s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%20%20%3Crect%20x%3D%2216%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%2210%22%20fill%3D%22rgb(255%2C255%2C255)%22%20%20opacity%3D%220.2%22%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22opacity%22%20attributeType%3D%22XML%22%20values%3D%220.2%3B%201%3B%20.2%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22height%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%2020%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%20%20%3Canimate%20attributeName%3D%22y%22%20attributeType%3D%22XML%22%20values%3D%2210%3B%205%3B%2010%22%20begin%3D%220.3s%22%20dur%3D%220.6s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%20%20%3C%2Frect%3E%0A%20%20%3C%2Fsvg%3E") no-repeat scroll center center transparent
}

.strip .lazy-image.-loaded canvas {
    background: none
}

.strip .caption {
    position: absolute;
    z-index: 200;
    right: 0;
    bottom: 18px;
    left: 0;
    color: #fff;
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.35)
}
