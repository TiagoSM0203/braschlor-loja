import { useMemo, useState, FormEvent } from 'react'
import { Contatos } from '../../components/Contato/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

export default function ContatoPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [sendSuccess, setSendSuccess] = useState(false)

  const isValidEmail = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [email]
  )
  const canSubmit = firstName && lastName && isValidEmail && message

  const openModal = (preset?: 'parceria') => {
    if (preset === 'parceria') {
      setMessage(
        'Olá! Tenho interesse em ser revendedor(a)/distribuidor(a).\n' +
          '- Cidade/UF: \n' +
          '- Segmento (mercado, atacado, e-commerce etc.): \n' +
          '- Volume estimado mensal: \n' +
          '- Possuo CNPJ: ( ) sim  ( ) não\n' +
          '\nPoderiam me enviar as condições comerciais e o catálogo atualizado?'
      )
    }
    setIsOpen(true)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!canSubmit || isSending) return

    setIsSending(true)
    setSendError('')
    setSendSuccess(false)
    try {
      const subject = `Contato do site - ${firstName} ${lastName}`
      const bodyLines = [
        `Nome: ${firstName} ${lastName}`,
        `Email: ${email}`,
        '',
        'Mensagem:',
        message,
      ]
      const body = encodeURIComponent(bodyLines.join('\n'))
      const to = 'vendas@braschlor.com.br'
      const mailto = `mailto:${to}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`

      window.location.href = mailto

      setSendSuccess(true)
      setFirstName('')
      setLastName('')
      setEmail('')
      setMessage('')
      setTimeout(() => setIsOpen(false), 1200)
    } catch (err: unknown) {
      setSendError('Não foi possível abrir o cliente de email.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Contatos
      className="pt-5 pb-5"
      style={{
        paddingTop:
          'calc(var(--header-h, 80px) + var(--header-gap, 20px) + 16px)',
      }}
    >
      <div className="container row align-items-center justify-content-center g-4">
        <div className="w-lg-50 col-12 col-md-6 order-2 order-md-1 text-start text-md-start">
          <h1>
            <span>Fale Conosco</span> e seja parceiro.
          </h1>
          <p>
            Precisa de ajuda, informações sobre produtos ou suporte? Nossa
            equipe está pronta para atender. Se você é lojista, atacadista ou
            quer revender nossos produtos, temos condições comerciais e suporte
            para parceiros em todo o Brasil.
          </p>

          <div className="d-flex justify-content-between">
            <div>
              <h5>
                <FontAwesomeIcon icon={faPhone} /> Telefone:
              </h5>
              <p>(11) 4442-2403</p>
              <h5>
                <FontAwesomeIcon icon={faEnvelope} /> Email:
              </h5>
              <p>vendas@braschlor.com.br</p>
              <h5>
                <FontAwesomeIcon icon={faLocationDot} /> Endereço:
              </h5>
              <p>Rua Canário, 143 Laranjeiras - Caieiras/SP 07745-015</p>
            </div>
            <div>
              <p>
                <a
                  href="https://www.instagram.com/luneblanchepro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/5511993521508"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/Braschlor.Aromaty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </p>
            </div>
          </div>

          <div className="text-center text-md-start d-flex flex-column flex-md-row gap-2">
            <button
              type="button"
              className="btn btn-outline-success p-3"
              onClick={() => openModal()}
            >
              Entre em contato
            </button>
            <button
              type="button"
              className="btn btn-success p-3"
              onClick={() => openModal('parceria')}
            >
              Quero ser parceiro
            </button>
          </div>

          {/* Bloco informativo extra para revenda/distribuição */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <h5 className="mb-2">Revenda e Distribuição</h5>
              <p className="mb-2">
                Oferecemos condições especiais para revendedores e
                distribuidores: preços competitivos, apoio de marketing e
                atendimento dedicado.
              </p>
              <ul className="mb-0">
                <li>Condições comerciais progressivas por volume;</li>
                <li>Catálogo completo e atualização de portfólio;</li>
                <li>Suporte de exposição, materiais e comunicação;</li>
                <li>Operação ágil com faturamento para todo o Brasil.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 order-1 order-md-2 text-center">
          <picture>
            <source type="image/avif" srcSet="/imgs/contato.avif" />
            <source type="image/webp" srcSet="/imgs/contato.webp" />
            <img
              src="/imgs/contato.webp"
              alt="Contato"
              className="img-fluid rounded-3"
              loading="lazy"
            />
          </picture>
        </div>
      </div>

      {isOpen && (
        <div className="modalOverlay" role="dialog" aria-modal="true">
          <div className="modalContent">
            <div className="modalHeader d-flex justify-content-between align-items-center mb-3">
              <h5 className="m-0">Fale com a gente</h5>
              <button
                aria-label="Fechar"
                className="btn btn-sm btn-outline-success botao-close p-2"
                onClick={() => setIsOpen(false)}
              >
                Fechar
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row g-3 modalBody">
                <div className="col-12 col-md-6">
                  <label className="form-label">Nome</label>
                  <input
                    className="form-control"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Sobrenome</label>
                  <input
                    className="form-control"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    className={`form-control ${
                      email && !isValidEmail ? 'is-invalid' : ''
                    }`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {email && !isValidEmail && (
                    <div className="invalid-feedback">
                      Informe um email válido.
                    </div>
                  )}
                </div>
                <div className="col-12">
                  <label className="form-label">Mensagem</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                {sendError && (
                  <div className="col-12">
                    <div className="alert alert-danger py-2" role="alert">
                      {sendError}
                    </div>
                  </div>
                )}
                {sendSuccess && (
                  <div className="col-12">
                    <div className="alert alert-success py-2" role="alert">
                      Mensagem enviada com sucesso!
                    </div>
                  </div>
                )}
              </div>
              <div className="modalFooter mt-4 d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-success botao-close p-2"
                  onClick={() => setIsOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!canSubmit || isSending}
                >
                  {isSending ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Contatos>
  )
}
