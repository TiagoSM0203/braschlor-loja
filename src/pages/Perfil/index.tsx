import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CardContext'
import { useEffect } from 'react'

export default function PerfilPage() {
  const { user, isAuthenticated, logout } = useAuth()
  const { items } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) navigate('/login')
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) return null

  return (
    <div className="container py-4" style={{ marginTop: '13vh' }}>
      <h1 className="mb-4">Seu Perfil</h1>

      <div className="row g-4">
        <div className="col-12 col-lg-3">
          <div className="list-group">
            <a className="list-group-item list-group-item-action active">
              Resumo
            </a>
            <a className="list-group-item list-group-item-action">
              Seus pedidos
            </a>
            <a className="list-group-item list-group-item-action">Endereços</a>
            <a className="list-group-item list-group-item-action">
              Dados da conta
            </a>
            <button
              className="list-group-item list-group-item-action text-danger"
              onClick={() => {
                logout()
                navigate('/')
              }}
            >
              Sair
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Olá, {user?.name}</h5>
              <p className="mb-1">Email: {user?.email}</p>
              <hr />
              <h6>Resumo rápido</h6>
              <ul className="mb-0">
                <li>Pedidos recentes: 0</li>
                <li>Itens no carrinho agora: {items.length}</li>
                <li>Endereços cadastrados: 0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
