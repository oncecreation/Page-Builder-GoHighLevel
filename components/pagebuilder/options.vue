<template>
  <section class="hl_wrapper nav-shrink d-flex">
    <section class="hl_wrapper--inner page-creator" id="page-creator">
      <section class="hl_page-creator--main">
        <div class="hl_page-creator--menu">
          <div class="menu--left">
            <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Back"><i class="fas fa-arrow-left"></i>
            </button>
            <div class="btn-group">
              <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Desktop" id="page-creator-desktop"><i class="fas fa-desktop"></i>
              </button>
              <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Mobile" id="page-creator-mobile"><i class="fas fa-mobile-alt"></i>
              </button>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Apps"><i class="fas fa-plug"></i>
              </button>
              <div class="dropdown" id="settings-group">
                <button type="button" class="btn btn-light btn-sm dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip" data-placement="top" title="Settings"><i class="fas fa-cogs"></i><span class="btn-text">Settings</span>
                </button>
                <div class="dropdown-menu">
                  <div class="nav">
                    <a class="dropdown-item" data-toggle="tab" href="#integrations">Integrations</a>
                    <a class="dropdown-item" data-toggle="tab" href="#seo">SEO Meta Data</a>
                    <a class="dropdown-item" data-toggle="tab" href="#tracking">Tracking Code</a>
                    <a class="dropdown-item" data-toggle="tab" href="#css">Custom CSS</a>
                    <a class="dropdown-item" data-toggle="tab" href="#background">Background</a>
                    <a class="dropdown-item" data-toggle="tab" href="#typography">Typography</a>
                    <a class="dropdown-item" data-toggle="tab" href="#general">General</a>
                  </div>
                </div>
              </div>
              <div class="dropdown">
                <button type="button" class="btn btn-light btn-sm dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip" data-placement="top" title="Pop up"><i class="fas fa-external-link-alt"></i><span class="btn-text">Pop up</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Show Popup</a>
                  <a class="dropdown-item" href="#">Edit Settings</a>
                </div>
              </div>
              <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Undo"><i class="fas fa-undo"></i>
              </button>
              <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Redo" disabled><i class="fas fa-redo"></i>
              </button>
            </div>
          </div>
          <div class="menu--right">
            <div class="btn-group">
              <div class="dropdown" id="element-group">
                <button type="button" class="btn btn-light btn-sm dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip" data-placement="top" title="Elements"><i class="fas fa-code"></i><span class="btn-text">Elements</span>
                </button>
                <div class="dropdown-menu">
                  <div class="nav">
                    <a class="dropdown-item" data-toggle="tab" href="#add-element">Add Element</a>
                    <a class="dropdown-item" data-toggle="tab" href="#manage-elements">Manage</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Preview"><i class="far fa-eye"></i><span class="btn-text">Preview</span>
              </button>
              <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Save" @click="saveChanges"><i class="far fa-save"></i><span class="btn-text">Save</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- END of .hl_page-creator--main -->

      <!-- END of .hl_page-creator--settings-group -->

    
      <!-- END of .hl_page-creator--sections-group -->

      <section class="hl_page-creator--rows-group" :class="{'active': columnDrawerOpen}">
        <a href="#" class="close-group" id="close-row-group"><i class="icon icon-close"></i></a>
        <div class="hl_row-group">
          <div class="tab-content" id="hl_row-group-tab">
            <div class="tab-pane fade active show" id="add-row" role="tabpanel" aria-labelledby="add-row-tab">
              <div class="add-row">
                <h2>Add Row</h2>
                <div class="add-row-body">
                  <Container class="row-cards" tag="div">
                      <Draggable v-for="column in columns" :key="column.name" class="row-card" tag="div">
                        <div @click="$root.$emit('add-column', trackChangeId + '-' +column.id); columnDrawerOpen = false;"">
                          <div class="icon">
                            <i class="fas fa-columns"></i>
                          </div>
                          <h5>{{column.name}}</h5>
                        </div>
                      </Draggable>
                    </Container>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="manage-rows" role="tabpanel" aria-labelledby="manage-rows-tab">
              <div class="manage-rows">
                <h2>Manage Rows</h2>
                <div class="rows-section-group-wrap">
                  <div class="rows-section-group">
                    <h3>Section</h3>
                    <ul class="rows">
                      <li>
                        <h4>2 Column Row</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="rows-section-group">
                    <h3>Section</h3>
                    <ul class="rows">
                      <li>
                        <h4>1 Column Row</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>1 Column Row</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="rows-section-group">
                    <h3>Section</h3>
                    <ul class="rows">
                      <li>
                        <h4>2 Column Row</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="rows-section-group">
                    <h3>Section</h3>
                    <ul class="rows">
                      <li>
                        <h4>1 Column Row</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>1 Column Row</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END of .hl_page-creator--rows-group -->

      <section class="hl_page-creator--columns-group">
        <a href="#" class="close-group" id="close-column-group"><i class="icon icon-close"></i></a>
        <div class="manage-columns">
          <h2>Manage Columns</h2>
          <div class="columns-section-group-wrap">
            <div class="columns-section-group">
              <h3>Section > 2 Column Row</h3>
              <ul class="columns">
                <li>
                  <h4>Left Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
                <li>
                  <h4>Right Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="columns-section-group">
              <h3>Section > 1 Column Row</h3>
              <ul class="columns">
                <li>
                  <h4>Full Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="columns-section-group">
              <h3>Section > 2 Column Row</h3>
              <ul class="columns">
                <li>
                  <h4>Left Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
                <li>
                  <h4>Right Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="columns-section-group">
              <h3>Section > 1 Column Row</h3>
              <ul class="columns">
                <li>
                  <h4>Full Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      <!-- END of .hl_page-creator--columns-group -->

      <section class="hl_page-creator--element-group" :class="{'active': elementsDrawerOpen}">
        <a href="#" class="close-group" id="close-element-group"><i class="icon icon-close"></i></a>
        <div class="hl_element-group">
          <div class="tab-content" id="hl_element-group-tab">
            <div class="tab-pane fade" :class="{'active show': elementsDrawerOpen}" id="add-element" role="tabpanel" aria-labelledby="add-element-tab">
              <div class="add-element">
                <div class="add-element-menu">
                  <ul>
                    <li class="active">
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Text</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Form</a>
                    </li>
                    <li>
                      <a href="#">Content</a>
                    </li>
                    <li>
                      <a href="#">Countdown</a>
                    </li>
                    <li>
                      <a href="#">Misc</a>
                    </li>
                  </ul>
                </div>
                <div class="add-element-body">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                  </div>
                  <div class="element-group">
                    <h4>Text</h4>
                    <div class="element-cards">
                      <Container behaviour="copy" :get-child-payload="() => getChildPayload('heading')" group-name="1" :get-ghost-parent="getGhostParent"  @drag-start="onDragStart">            
                        <Draggable :key="'heading-' + trackChangeId" tag="div" class="element-card" @click="$root.$emit('add-heading', trackChangeId); elementsDrawerOpen = false;">
                            <div class="icon">
                              <i class="fas fa-heading"></i>
                            </div>
                            <h5>Headline</h5>
                        </Draggable>
                      </Container>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-font"></i>
                        </div>
                        <h5>Sub-headline</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-paragraph"></i>
                        </div>
                        <h5>Paragraph</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-list"></i>
                        </div>
                        <h5>Bullet List</h5>
                      </div>
                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Media</h4>
                    <div class="element-cards">                          
                      <Container behaviour="copy" :get-child-payload="() => getChildPayload('image')" group-name="1" :get-ghost-parent="getGhostParent"  @drag-start="onDragStart">            
                      <Draggable :key="'heading-' + trackChangeId" tag="div" class="element-card" @click="$root.$emit('add-image', trackChangeId); elementsDrawerOpen = false;">
                        <div class="icon">
                          <i class="fas fa-image"></i>
                        </div>
                        <h5>Image</h5>
                      </Draggable>
                      </Container>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-images"></i>
                        </div>
                        <h5>Image Popup</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <h5>Video</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-play-circle"></i>
                        </div>
                        <h5>Video popup</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-volume-up"></i>
                        </div>
                        <h5>Audio player</h5>
                      </div>
                    </div>
                  </div>
                  </Container>
                  <div class="element-group">
                    <h4>Form</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-stop"></i>
                        </div>
                        <h5>Button</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fab fa-facebook-f"></i>
                        </div>
                        <h5>Facebook Option</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-square"></i>
                        </div>
                        <h5>Input</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-hand-pointer"></i>
                        </div>
                        <h5>Select Box</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-comment-alt"></i>
                        </div>
                        <h5>Text Area</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-check-square"></i>
                        </div>
                        <h5>Checkbox Headline</h5>
                      </div>

                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Advance Form</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-sms"></i>
                        </div>
                        <h5>SMS Sign up</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-file-invoice"></i>
                        </div>
                        <h5>Billing Add.</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-file-invoice"></i>
                        </div>
                        <h5>Shipping Add.</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-poll-h"></i>
                        </div>
                        <h5>Survey</h5>
                      </div>

                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Content Blocks</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-circle"></i>
                        </div>
                        <h5>Icon</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-file-image"></i>
                        </div>
                        <h5>Img Feature</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-link"></i>
                        </div>
                        <h5>Navigation</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-question-circle"></i>
                        </div>
                        <h5>FAQ</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-window-minimize"></i>
                        </div>
                        <h5>Divider</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-window-minimize"></i>
                        </div>
                        <h5>Progress bar</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-list"></i>
                        </div>
                        <h5>Image List</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-table"></i>
                        </div>
                        <h5>Pricing Table</h5>
                      </div>

                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Countdown</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-hourglass-start"></i>
                        </div>
                        <h5>Countdown</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-clock"></i>
                        </div>
                        <h5>Minute Timer</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-clock"></i>
                        </div>
                        <h5>Day Timer</h5>
                      </div>

                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Misc Elements</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-share-alt-square"></i>
                        </div>
                        <h5>Social Share</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-bell"></i>
                        </div>
                        <h5>Privacy Notice</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-comments"></i>
                        </div>
                        <h5>FB Comments</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-align-center"></i>
                        </div>
                        <h5>Text Block</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-code"></i>
                        </div>
                        <h5>Custom JS/HTML</h5>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="manage-elements" role="tabpanel" aria-labelledby="manage-elements-tab">
              <div class="manage-elements">
                <h2>Manage Elements</h2>
                <div class="elements-section-group-wrap">
                  <div class="elements-section-group">
                    <h3>Section > Left Column</h3>
                    <ul class="elements">
                      <li>
                        <h4>Image</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="elements-section-group">
                    <h3>Section > Right Column</h3>
                    <ul class="elements">
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input Form</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input Form</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Button</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="elements-section-group">
                    <h3>Section > Full Column</h3>
                    <ul class="elements">
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Button</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Button</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="elements-section-group">
                    <h3>Section > Right Column</h3>
                    <ul class="elements">
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input Form</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input Form</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Button</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END of .hl_page-creator--element-group -->
    </section>
  </section>
</template>
<script>
  import { Container, Draggable } from 'vue-smooth-dnd'

  export default {
    props: ['columns', 'elements'],
    components: {
      Container,
      Draggable
    },
    data() {
      return {
        columnDrawerOpen: false,
        elementsDrawerOpen: false,
        trackChangeId: null
      }
    },
    methods: {
      getGhostParent() {
        return document.body;
      },
      onDragStart(){
        console.log('dragging elements')
        this.elementsDrawerOpen = false
        this.columnDrawerOpen = false
      },
      getChildPayload(type){
        return `${type}-${this.trackChangeId}`
      },
      saveChanges(){
        alert('Changes Saved to Local Storage')
      }
    },
    mounted() {
      this.$root.$on('open-column-drawer', data => {
          this.columnDrawerOpen = true
          this.trackChangeId = data
      });
      this.$root.$on('open-elements-drawer', data => {
        this.trackChangeId = data
        this.elementsDrawerOpen = true
      })
    }
  }
</script>
<style>
  .hl_wrapper--inner {
    padding-bottom: 0px !important;
  }

  .hl_page-creator--element-group .element-group .element-cards .element-card {
    min-width: 144px !important;
  }
</style>