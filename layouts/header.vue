<template>
  <header class="hl_header nav-shrink ">
    <div class="container-fluid">
      <select class="selectpicker hl_header--picker" data-width="fit" data-header="Switch Location <a href='#'>View Locations</a>">
        <option data-content="<img src='/img/img-converse.png'> Converse Store #32">Converse Store #32</option>
        <option data-content="<img src='/img/img-nike1.png'> Nike Store, 49 Garnet Stream, Baja, CA">Nike Store, 49 Garnet Stream, Baja, CA</option>
        <option data-content="<img src='/img/img-nike2.png'> Nike Store, Andersen Center 83b, West 82nd Street, San Francisco, CA">Nike Store, Andersen Center 83b, West 82nd Street, San Francisco, CA</option>
      </select>
      <div class="hl_header--controls">
        <a href="#" class="btn btn-circle btn-yellow hl_header--recent-activities -notification" id="recent_activities-toggle">
          <i class="icon-list"></i>
          <span class="sr-only">View Recent Activities</span>
        </a>
        <a href="#" class="btn btn-circle btn-primary hl_header--copy-link" data-toggle="modal" data-target="#review-link--modal">
          <i class="icon-link"></i>
          <span class="sr-only">Copy Review Link</span>
        </a>
        <div class="hl_header--dropdown hl_header--phone dropdown --no-caret">
          <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="btn btn-circle btn-green-lt"><i class="fas fa-phone"></i></span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="hl_header--phone-header">
              <h4>Phone Settings</h4>
            </div>
            <div class="caller-id">
              <div class="caller-id-header">
                <h3>Caller ID:</h3>
                <a href="#">Manage Numbers</a>
              </div>
              <div class="form-group">
                <div class="select-control-wrap">
                  <select class="select-control">
                    <option>+1 802-327-5248 (Primary Number)</option>
                    <option>Manage/change phone numbers →</option>
                  </select>
                </div>
                <button type="button" class="btn btn-primary"><i class="icon icon-duplicate"></i>
                </button>
              </div>
            </div>
            <div class="call-recording">
              <h3>Call Recording:</h3>
              <div class="toggle">
                <input type="checkbox" class="tgl tgl-light" id="call-recording">
                <label class="tgl-btn" for="call-recording"></label>
              </div>
            </div>
            <div class="audio-settings">
              <h3>Audio Settings:</h3>
              <div class="audio-settings-item">
                <label>Sound Output</label>
                <div class="select-control-wrap">
                  <select class="select-control">
                    <option>System Default</option>
                    <option>Built-in Output</option>
                  </select>
                </div>
                <a href="#" class="test">Test</a>
              </div>
              <div class="audio-settings-item">
                <label>Ringing:</label>
                <div class="select-control-wrap">
                  <select class="select-control">
                    <option>System Default</option>
                    <option>Built-in Output</option>
                  </select>
                </div>
                <a href="#" class="test">Test</a>
              </div>
              <div class="audio-settings-item">
                <label>Microphone:</label>
                <div class="select-control-wrap">
                  <select class="select-control">
                    <option>System Default</option>
                    <option>Built-in Output</option>
                  </select>
                </div>
                <a href="#" class="test">Test</a>
              </div>
            </div>
            <div class="hl_header--phone-footer">
              <div class="form-group">
                <i class="fas fa-phone"></i>
                <input type="text" class="form-control" placeholder="Dial a number">
                <button type="button" class="btn btn-success btn-sm">Call</button>
              </div>
            </div>
          </div>
        </div>
        <div class="hl_header--dropdown dropdown --no-caret">
          <a href="#" class="hl_header--avatar dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="avatar">
              <div class="avatar_img">
                <img src="/img/img-avatar-sample1.png" alt="Avatar Name">
              </div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>