<template>
  <nav class="hl_navbar shrink" id="navbar">
    <div class="hl_navbar--inner">
        <a href="./" class="hl_navbar--logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
            <image width="28" height="26" xlink:href="data:img/png;base64,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"
            />
          </svg>
        </a>
        <button class="hl_navbar--toggler" type="button" id="navbar-toggler">
          <span class="navbar-toggler-bar"></span>
          <span class="navbar-toggler-bar"></span>
          <span class="navbar-toggler-bar"></span>
        </button>
        <div class="hl_navbar--collapse" id="navbar-collapse">
          <button class="hl_navbar--button btn btn-success btn-block" data-toggle="modal" data-target="#client-checkin--modal">Check In Client</button>
          <ul class="hl_navbar--links list-unstyled" id="nav-links">
            <li id="nav-dashboard">
              <a href="./" data-tooltip="nav-tooltip" data-placement="right" title="Dashboard">
                <i class="icon-duplicate"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li id="nav-widgets">
              <a href="./widgets.html" data-tooltip="nav-tooltip" data-placement="right" title="Widgets">
                <i class="icon-tiles-filled"></i>
                <span>Widgets</span>
              </a>
            </li>
            <li id="nav-marketing">
              <a data-toggle="collapse" href="#nav-marketing-collapse" role="button" aria-expanded="false" aria-controls="nav-marketing-collapse" data-tooltip="nav-tooltip" data-placement="right" title="Marketing">
                <i class="icon-mail"></i>
                <span>Marketing</span>
                <i class="caret icon-arrow-down-1"></i>
              </a>
              <div class="collapse nav-dropdown-links" id="nav-marketing-collapse">
                <ul>
                  <li class="active">
                    <a href="./customer-acquisition.html">Customer Acquisition</a>
                  </li>
                  <li>
                    <a href="./triggers.html">Triggers</a>
                  </li>
                  <li>
                    <a href="./workflow.html">Workflow</a>
                  </li>
                  <li>
                    <a href="./form-builder.html">Form Builder</a>
                  </li>
                  <li>
                    <a href="./landing-page-creator.html">Page Creator</a>
                  </li>
                  <li>
                    <a href="#">Product Adoption</a>
                  </li>
                  <li>
                    <a href="#">Product Upsell</a>
                  </li>
                  <li>
                    <a href="#">Content Library</a>
                  </li>
                  <li>
                    <a href="#">Snapshot Widget</a>
                  </li>
                </ul>
              </div>
            </li>
            <li id="nav-reviews">
              <a href="./reviews.html" data-tooltip="nav-tooltip" data-placement="right" title="Reviews">
                <i class="icon-bubble-filled"></i>
                <span>Reviews</span>
              </a>
            </li>
            <li id="nav-customers">
              <a data-toggle="collapse" href="#nav-customer-collapse" role="button" aria-expanded="false" aria-controls="nav-customer-collapse" data-tooltip="nav-tooltip" data-placement="right" title="Customers">
                <i class="icon-user"></i>
                <span>Customers</span>
                <i class="caret icon-arrow-down-1"></i>
              </a>
              <div class="collapse nav-dropdown-links" id="nav-customer-collapse">
                <ul>
                  <li class="active">
                    <a href="./contact-details.html">Contact Details</a>
                  </li>
                  <li>
                    <a href="./customers.html">Customers</a>
                  </li>
                </ul>
              </div>
            </li>
            <li id="nav-team">
              <a href="./team.html" data-tooltip="nav-tooltip" data-placement="right" title="Team">
                <i class="icon-heart"></i>
                <span>Team</span>
              </a>
            </li>
            <li id="nav-online-analysis">
              <a href="./online-analysis.html" data-tooltip="nav-tooltip" data-placement="right" title="Online Analysis">
                <i class="icon-pulse"></i>
                <span>Online Analysis</span>
              </a>
            </li>
            <li id="nav-opportunities">
              <a href="./opportunities.html" data-tooltip="nav-tooltip" data-placement="right" title="Opportunities">
                <i class="icon-blocks"></i>
                <span>Opportunities</span>
              </a>
            </li>
            <li id="nav-conversations">
              <a href="./conversations.html" data-tooltip="nav-tooltip" data-placement="right" title="Conversations">
                <i class="icon-bubble"></i>
                <span>Conversations</span>
              </a>
            </li>
            <li id="nav-calendar">
              <a href="./calendar.html" data-tooltip="nav-tooltip" data-placement="right" title="Calendar">
                <i class="icon-calendar"></i>
                <span>Calendar</span>
              </a>
            </li>
            <li id="nav-settings">
              <a href="./settings-profile.html" data-tooltip="nav-tooltip" data-placement="right" title="Settings">
                <i class="icon-settings-1"></i>
                <span>Settings</span>
              </a>
            </li>
            <li id="nav-social">
              <a href="./social.html" data-tooltip="nav-tooltip" data-placement="right" title="Social Media">
                <i class="icon-target-2"></i>
                <span>Social Media</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>