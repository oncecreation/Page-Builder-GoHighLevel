<template>
  <div>
    <Sidebar></Sidebar>
    <Header></Header>
   <nuxt/>
  </div>
</template>

<script>
import Header from './header.vue'
import Sidebar from './sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      title: 'HighLevel'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'HighLevel Landing Page' }
      ],
      link: [
        { rel: 'stylesheet', href: '/css/styles.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.css' }
      ],
      script: [
        // Jquery
        { src: 'https://code.jquery.com/jquery-3.2.1.min.js', type: 'text/javascript', charset: 'utf-8'},
        { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', type: 'text/javascript', charset: 'utf-8'},
        // Bootstrap 
        { src: '/js/bootstrap/bootstrap.bundle.min.js', type: 'text/javascript', charset: 'utf-8'},
        // HighChart Scripts
        { src: 'https://code.highcharts.com/highcharts.js', type: 'text/javascript', charset: 'utf-8'},
        { src: 'https://code.highcharts.com/highcharts.js', type: 'text/javascript', charset: 'utf-8'},
        { src: 'https://code.highcharts.com/modules/funnel.js', type: 'text/javascript', charset: 'utf-8'},
        { src: 'https://code.highcharts.com/modules/solid-gauge.js', type: 'text/javascript', charset: 'utf-8'},
        // FullCalendar
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js', type: 'text/javascript', charset: 'utf-8'},
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.js', type: 'text/javascript', charset: 'utf-8'},
        // FontAwesome
        { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js', type: 'text/javascript'},
        // Main JS
        { src: '/js/scripts.min.js', type: 'text/javascript', charset: 'utf-8'},
      ]
    }
  }
}
</script>