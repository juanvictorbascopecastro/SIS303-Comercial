<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Dashboard">
    <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
    
    <title><?php echo $this->data['title']; ?></title>

    <!-- Bootstrap core CSS -->
    <link href="<?= BASE_URL; ?>assets/css/bootstrap.css" rel="stylesheet">
    <!--external css-->
    <link href="<?= BASE_URL; ?>assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
        
    <!-- Custom styles for this template -->
    <link href="<?= BASE_URL; ?>assets/css/style.css" rel="stylesheet">
    <link href="<?= BASE_URL; ?>assets/css/style-responsive.css" rel="stylesheet">
  </head>

  <body>

      <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->
	  <div id="login-page">
	  	<div class="container">
	  	
            <form class="form-login" id="login-form">
                <h2 class="form-login-heading">Iniciar Sesión</h2>
                <div class="login-wrap">
                    <input type="text" class="form-control" placeholder="Correo..." autofocus name="email">
                    <br>
                    <input type="password" class="form-control" placeholder="Contraseña..." name="password">
                    <label class="checkbox">
                        <span class="pull-right">
                            <a data-toggle="modal" href="login.html#myModal"> ¿Olvidate tu contraseña?</a>
                        </span>
                    </label>
                    <button class="btn btn-theme btn-block" type="submit"><i class="fa fa-lock"></i> INICIAR</button>
        
                </div>
        
            </form>	  	
            <!-- Modal -->
            <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title">Forgot Password ?</h4>
                            </div>
                            <div class="modal-body">
                                <p>Enter your e-mail address below to reset your password.</p>
                                <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
    
                            </div>
                            <div class="modal-footer">
                                <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                                <button class="btn btn-theme" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- modal -->
	  	</div>
	  </div>

    <!-- js placed at the end of the document so the pages load faster -->
    <script src="<?= BASE_URL; ?>assets/js/jquery.js"></script>
    <script src="<?= BASE_URL; ?>assets/js/bootstrap.min.js"></script>

    <!--BACKSTRETCH-->
    <!-- You can use an image of whatever size. This script will stretch to fit in any screen size.-->
    <script type="text/javascript" src="<?= BASE_URL; ?>assets/js/jquery.backstretch.min.js"></script>
    <script>
        const base_url = "<?= BASE_URL; ?>";
        $.backstretch(base_url+"assets/img/tienda.jpg", {speed: 500});
    </script>
    <script src="<?= BASE_URL?>assets/js/sweetalert2.js"></script>

    <script src="<?= BASE_URL?>assets/js/index.js"></script>
    <script src="<?= BASE_URL?>assets<?= $this->data['js']?>"></script>
  </body>
</html>
