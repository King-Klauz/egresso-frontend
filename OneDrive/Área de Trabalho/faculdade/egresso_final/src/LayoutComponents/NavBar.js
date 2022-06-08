import ufma from '../assets/ufma.png'
import './stylesNavBar.css'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-xl navbar-light bg-light">
            <a href="#" class="navbar-brand"><i class="fa fa-cube"></i>Brand<b>Name</b></a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link active">Home</a>
                    <a href="#" class="nav-item nav-link">Sobre</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Services</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Web Design</a>
                            <a href="#" class="dropdown-item">Web Development</a>
                            <a href="#" class="dropdown-item">Graphic Design</a>
                            <a href="#" class="dropdown-item">Digital Marketing</a>
                        </div>
                    </div>
                    <a href="#" class="nav-item nav-link">Depoimentos</a>
                    <a href="#" class="nav-item nav-link">Egresso</a>
                </div>
                <form class="navbar-form form-inline">
                    <div class="input-group search-box">
                        <input type="text" id="search" class="form-control" placeholder="Procurar por nome" />
                        <span class="input-group-addon"><i class="material-icons"></i></span>
                    </div>
                </form>
                <div class="navbar-nav ml-auto">
                    <a href="#" class="nav-item nav-link notifications"><i class="fa fa-bell-o"></i><span class="badge">1</span></a>
                    <a href="#" class="nav-item nav-link messages"><i class="fa fa-envelope-o"></i><span class="badge">10</span></a>
                    <div class="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action" aria-expanded="false"><img src={ufma} class="avatar" alt="Avatar"/> Claudio Lopes <b class="caret"></b></a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Ver Perfil</a>
                            <a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendário</a>
                            <a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Configurações</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item"><i class="material-icons"></i> Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;