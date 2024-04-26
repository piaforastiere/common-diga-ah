import React from 'react'

const PasswordRules = ({
  uppercaseValid,
  numberValid,
  specialCharValid,
}: {
  uppercaseValid: boolean
  numberValid: boolean
  specialCharValid: boolean
}) => {
  return (
    <div className="containerInput">
      <div
        className={
          uppercaseValid && numberValid && specialCharValid
            ? 'valid'
            : 'contentDescriptionPassword'
        }
      >
        <p className="descriptionPassword">La contraseña debe incluir:</p>
        <div className="content-rules">
          <p className={uppercaseValid ? 'rules valid' : 'rules'}>
            1 mayúscula
          </p>
          <p className={numberValid ? 'rules valid' : 'rules'}>1 número</p>
          <p className={specialCharValid ? 'rules valid' : 'rules'}>
            1 caracter especial
          </p>
        </div>
      </div>
    </div>
  )
}

export default PasswordRules
