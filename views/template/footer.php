<script type="text/javascript">
    const base_url = "<?= BASE_URL; ?>";
</script>
<!-- js placed at the end of the document so the pages load faster -->
<script src="<?= BASE_URL; ?>assets/js/jquery.js"></script>
<script src="<?= BASE_URL; ?>assets/js/jquery-1.8.3.min.js"></script>
<script src="<?= BASE_URL; ?>assets/js/bootstrap.min.js"></script>
<script class="include" type="text/javascript" src="<?= BASE_URL; ?>assets/js/jquery.dcjqaccordion.2.7.js"></script>
<script src="<?= BASE_URL; ?>assets/js/jquery.scrollTo.min.js"></script>
<script src="<?= BASE_URL; ?>assets/js/jquery.nicescroll.js" type="text/javascript"></script>
<script src="<?= BASE_URL; ?>assets/js/jquery.sparkline.js"></script>


<!--common script for all pages-->
<script src="<?= BASE_URL; ?>assets/js/common-scripts.js"></script>

<script type="text/javascript" src="<?= BASE_URL; ?>assets/js/jquery.gritter.js"></script>
<script type="text/javascript" src="<?= BASE_URL; ?>assets/js/gritter-conf.js"></script>

<script src="<?= BASE_URL?>assets/js/sweetalert2.js"></script>   

<script src="<?= BASE_URL?>assets/js/index.js"></script>
<script src="<?= BASE_URL?>assets<?= $this->data['js']?>"></script>

<!--script for this page-->
<!--<script src="<?= BASE_URL; ?>assets/js/sparkline-chart.js"></script>    
<script src="<?= BASE_URL; ?>assets/js/zabuto_calendar.js"></script>-->
<?php if($this->data['id'] == 10){?>
    <script src="<?= BASE_URL; ?>assets/js/Chart.min.js"></script>
   <!-- <script src="<?= BASE_URL; ?>assets/js/chartjs-conf.js"></script>-->
<?php } ?>
   