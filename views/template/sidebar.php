<!--sidebar start-->
<aside>
    <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
        
            <p class="centered"><a href="#">
                <img src="<?= BASE_URL; ?>assets/img/user.png" class="img-circle" width="60"></a></p>
            <h5 class="centered"><?= $_SESSION['usuario']['nombre'].' '.$_SESSION['usuario']['apellido']?></h5>
            
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 1 ? 'active' : '' ?>" href="<?php echo BASE_URL?>home">
                    <i class="fa fa-home"></i>
                    <span>Inicio</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 2 || $this->data['id'] == 9 ? 'active' : '' ?>" href="<?php echo BASE_URL?>ventas">
                    <i class="fa fa-shopping-cart"></i>
                    <span>Ventas</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 3 ? 'active' : '' ?>" href="<?php echo BASE_URL?>producto">
                    <i class="fa fa-desktop"></i>
                    <span>Productos</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 5 ? 'active' : '' ?>" href="<?php echo BASE_URL?>categoria">
                    <i class="fa fa-list"></i>
                    <span>Categorias</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 11 || $this->data['id'] == 12 ? 'active' : '' ?>" href="<?php echo BASE_URL?>pedidos">
                    <i class="fa fa-truck"></i>
                    <span>Pedidos</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 7 ? 'active' : '' ?>" href="<?php echo BASE_URL?>almacen">
                    <i class="fa fa-archive"></i>
                    <span>Almacen</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 8 ? 'active' : '' ?>" href="<?php echo BASE_URL?>proveedor">
                    <i class="fa fa-indent"></i>
                    <span>Proveedores</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 4 ? 'active' : '' ?>" href="<?php echo BASE_URL?>cliente">
                    <i class="fa fa-users"></i>
                    <span>Clientes</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 6 ? 'active' : '' ?>" href="<?php echo BASE_URL?>usuario">
                    <i class="fa fa-user"></i>
                    <span>Usuarios</span>
                </a>
            </li>
            <li class="sub-menu">
                <a class="<?= $this->data['id'] == 10 ? 'active' : '' ?>" href="<?php echo BASE_URL?>reportes">
                    <i class="fa fa-bar-chart-o"></i>
                    <span>Reportes</span>
                </a>
            </li>
            <!--<li class="sub-menu">
                <a href="javascript:;" >
                    <i class="fa fa-desktop"></i>
                    <span>Ventas</span>
                </a>
                <ul class="sub">
                    <li><a  href="general.html">General</a></li>
                    <li><a  href="buttons.html">Buttons</a></li>
                    <li><a  href="panels.html">Panels</a></li>
                </ul>
            </li>-->

        </ul>
        <!-- sidebar menu end-->
    </div>
</aside>
<!--sidebar end-->