/* ==UserStyle==
@name           Revert YouTube Studio UI (Beta)
@namespace      https://github.com/4147s/Revert-YT-Studio-Beta
@version        1.0.5
@description    A userstyle that reverts changes made to YouTube Studio since 2018~
@author         Yacine
@preprocessor   stylus
@license        CC Zero

@var            checkbox  swapCards  "Swap second and right columns"  0
@var            checkbox  pagetitleWeight  "Change page title font weight to 500"  0
@var            checkbox  inspoTabLast  "Make Inspiration Tab display last"  1
@var            checkbox  oldYTCR  "Video copyright details Reconstruct"  1
@var            checkbox  dialogborder  "Less-round Dialog"  1
@var            checkbox  nocomcheck  "Remove comments page checkboxes"  0
@var            checkbox  altcomchip  "Alternative Comments chips (filters)"  1
@var            checkbox  renamecomments  "Rename Community to Comments"  1
@var            checkbox  navbg  "Restore Nav Drawer background (Pre-2020)"  1
@var            checkbox  selectvis  "Restore 2020 Visibility Select style"  0
@var            checkbox  hidevidrowtitle  "Hide title when hovering over Video Rows"  0
@var            checkbox  oldESTP  "End Screen Template Reconstruct (Pre-2020)"  0
@var            checkbox  darkve  "Dark Video Editor"  1
@var            checkbox  returnpl  "Return Playlists tab to menu"  1
==/UserStyle== */

@-moz-document domain("studio.youtube.com") {
    html {
        --ytcp-general-background-dash: #f4f4f4;
        --ytcp-omnisearch-color: #909090;
        --card-padding-horizontal: 22px;
        --item-padding-horizontal: 22px;
        --ytcp-chip-background-active: #707070;
        --paper-tab-content-focused-font-weight: 700;
    }
    html {
        --ytve-border-color-focused: var(--ytcp-themed-blue);
        --ytve-timeline-marker-color-active: var(--ytcp-themed-blue);
        if (darkve == 1) {
        --ytve-border-color: rgba(255,255,255,0.15);
        --ytve-preview-background-color: #191919;
        --ytve-secondary-color: #aaa;
        --ytve-disabled-color: #707070;
        --ytve-background-color: #2c2c2c;
        --ytve-background-color-hover: #202020;
        --ytve-background-color-selected: #181818;
        --ytve-trim-marker-color: #3ea6ef;
        --ytve-removed-content-shade-color: rgba(0,0,0,0.4);
        --ytve-playhead-color: #909090;
        --ytve-border-color-focused: #f1f1f1;
        --ytve-border-color-error: #ff8983;
        --ytve-timeline-marker-color-active: #3ea6ef;
        --ytve-timeline-marker-color-error: #ff8983;
        --ytve-error-color: #ff8983;
        --ytve-container-border-color: #484848;
        --ytve-timeline-row-color: #424242;
        --ytve-timeline-marker-label-color: #0f0f0f;
        --ytve-timeline-marker-color: #aaa;
        --ytve-timeline-resize-line-color: #606060;
        }
    }
    html[dark] {
        --ytcp-general-background-dash: #212121;
    }
    html, [light] {
        --yt-spec-menu-background: rgba(254,254,254,0.97);
    }
    html[dark], [dark] {
        --yt-spec-outline: rgba(255,255,255,0.1);
        --yt-spec-menu-background: rgba(33,33,33,0.97);
    }
    html[dark][dark] ytcp-button-shape {
        --yt-spec-outline: rgba(255,255,255,0.1);
    }
    html:not(.style-scope):not(.style-scope) {
        --icon-color: var(--ytcp-text-secondary);
        --ytcp-container-border-radius: var(--ytcp-s-border-radius);
    }
    
    /* Header */
    .ytcpAppHeaderHeader {
        padding: 12px 24px 12px 16px;
    }
    .ytcpAppHeaderHost {
        box-shadow: 0 1px 4px 1px var(--ytcp-overlay-drop-shadow-app-header); /* In case they remove the shadow */
    }
    
    /* Search bar */
    input.ytcp-omnisearch {
        background-color: var(--ytcp-brand-background-solid);
        border: 1px solid var(--ytcp-ten-percent-layer);
        font-family: var(--ytcp-font-yt-headline1-font-family);
        font-weight: var(--ytcp-font-yt-headline1-font-weight);
    }
    .ytcpAppHeaderOmnisearch {
        padding: 0;
    }
    ytcp-omnisearch {
        --search-bar-radius: 5px;
    }
    ytcp-omnisearch[high-contrast] input.ytcp-omnisearch::placeholder, input.ytcp-omnisearch::placeholder {
        color: var(--ytcp-omnisearch-color);
    }
    ytcp-omnisearch #clear-icon.ytcp-omnisearch, ytcp-omnisearch .search-icon.ytcp-omnisearch {
        color: var(--ytcp-text-secondary);
    }
    ytcp-omnisearch:not(.focused) #clear-icon.ytcp-omnisearch, ytcp-omnisearch:not(.focused) .search-icon.ytcp-omnisearch {
        color: var(--ytcp-omnisearch-color);
    }
    ytcp-omnisearch.focused input.ytcp-omnisearch {
        border-radius: var(--search-bar-radius) var(--search-bar-radius) 0 0;
        border-color: transparent;
        border-bottom-color: var(--ytcp-ten-percent-layer);
    }
    
    /* Search dropdown */
    #results.ytcp-omnisearch {
        border-radius: 0 0 5px 5px;
        margin-top: 0;
    }
        
    /* Main page */
    #main.ytcp-entity-page[studio-theme="DASHBOARD"] {
        background-color: var(--ytcp-general-background-dash);
    }
    if (pagetitleWeight == 1) {
    ytcp-app[enable-page-title] .page-title.ytcp-app, .page-title.ytcp-entity-page-header {
        font-weight: 500;
    }
    }
    
    /* Icon button tweaks */
    ytcp-icon-button:not([overlay]) {
        padding: 8px;
        border: 0;
    }
    ytcp-icon-button:not([overlay]) {
        --ytcp-icon-button-color: var(--ytcp-text-secondary);
    }
    ytcp-icon-button[overlay] {
        --color-regular: var(--ytcp-static-overlay-text-secondary);
    }
    ytcp-icon-button[inverted] {
        --ytcp-icon-button-color: var(--ytcp-text-secondary-inverse);
    }
    ytcp-icon-button:not([disabled]):hover {
        background-color: initial;
    }
    /* Icon buttons in quick actions */
    ytcp-icon-button.ytcp-quick-actions:not(:hover):not([keyboard-focus]) {
        border: 0;
        margin: unset;
    }
    ytcp-icon-button.ytcp-quick-actions {
        background-color: var(--ytcp-brand-background-solid);
        border: 0;
        padding: 8px;
    }
    ytcp-icon-button.ytcp-quick-actions:not([disabled]):hover {
        background-color: var(--ytcp-brand-background-solid);
    }
    /* End of Icon buttons in quick actions */
    tp-yt-paper-ripple.ytcp-icon-button {
        color: inherit;
    }
    
    /* Cards */
    .card.ytcd-card {
        border-radius: var(--ytcp-s-border-radius);
        padding: 0px 0;
    }
    .analytics-button.ytcd-channel-facts-item {
        padding-left: 22px;
        padding-bottom: 18px;
    }
    #link-button-container.ytcd-entity-snapshot-item {
        flex-direction: column;
    }
    /* Reverts the layout of the second and right column layout like Pre-2020 */
    if (swapCards == 1) {
    .column.second-column.ytcd-channel-dashboard {
        order: 1;
    }
    }
    
    /* Card padding tweaks */
    ytcd-video-snapshot-upload.ytcd-entity-snapshot-item {
        padding: 10px;
    }
    .main-container.ytcd-video-snapshot-upload {
        border-radius: var(--ytcp-s-border-radius);
    }
    ytcd-card-button-action-item {
        padding-bottom: 22px;
    }
    .action-button.ytcd-recent-videos-item {
        padding-bottom: 14px;
    }
    .card-title.ytcd-basic-card {
        padding-bottom: 14px;
        padding-top: 22px;
    }
    .card-title.ytcd-list-card {
        padding-bottom: 14px;
        padding-top: 22px;
    }
    .item-title.ytcd-card-header-item {
        padding-top: 22px;
    }
    a.ytcd-post-cta-item {
        padding-bottom: 22px;
    }
    .content.ytcd-help-center-issues-item {
        padding-bottom: 22px;
    }
    .button-container.ytcd-error-item {
        padding-top: 5px;
    }
    #link-button-container.ytcd-entity-snapshot-item {
        padding-bottom: 18px;
    }
