import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { BudgetContainer, BudgetDescContainer, BudgetPriceContainer, BudgetSection, BudgetSetContainer, BudgetTipContainer, BudgetTitleContainer, Content, CurrencySelect, InputContainer, QuestionContainer } from "./styles";
import { FaCheck } from 'react-icons/fa'
import { displayValue } from '../../util/currency'
import Select from "../../components/Select";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";


const Budget = () => {

    const [currency, setCurrency] = useState('R$')
    const [values, setValues] = useState([
        399.9, 1099.9, 14299.99, 16799.99
    ])

    function displayCurrency(country) {
        if (country === 'USA') {
            setCurrency('US$')
            let array = []
            values.forEach(v => {
                array.push(Math.round((v * 0.2) * 100) / 100)
            })
            setValues(array)
        } else {
            setCurrency('R$')
            let array = []
            values.forEach(v => {
                array.push(Math.round((v * 5) * 100) / 100)
            })
            setValues(array)
        }
    }

    return (
        <BudgetContainer>
            <Navbar />
            <BudgetSetContainer>
                <h2>Nossos Principais Orçamentos</h2>
                <Select onChange={(e) => displayCurrency(e.target.value)}>
                    <option value="BRA">(R$) Brazilian Real</option>
                    <option value="USA">(US$) American Dollar</option>
                </Select>
            </BudgetSetContainer>

            <Content>

                <BudgetSection>
                    <BudgetTitleContainer>INTRO PLAN</BudgetTitleContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>

                    <BudgetPriceContainer>
                        {currency}{displayValue(values[0])}
                    </BudgetPriceContainer>
                </BudgetSection>
                <BudgetSection>
                    <BudgetTitleContainer>STANDARD PLAN</BudgetTitleContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>

                    <BudgetPriceContainer>
                        {currency}{displayValue(values[1])}
                    </BudgetPriceContainer>
                </BudgetSection>
                <BudgetSection>
                    <BudgetTitleContainer>MASTER PLAN</BudgetTitleContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetPriceContainer>
                        {currency}{displayValue(values[2])}
                    </BudgetPriceContainer>
                </BudgetSection>
                <BudgetSection>
                    <BudgetTitleContainer>PARTNER PLAN</BudgetTitleContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>
                    <BudgetTipContainer>
                        <div className="check-container-plan">
                            <FaCheck color="var(--whatsapp-green)" size="15px" />
                        </div>
                        <BudgetDescContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </BudgetDescContainer>
                    </BudgetTipContainer>

                    <BudgetPriceContainer>
                        {currency}{displayValue(values[3])}
                    </BudgetPriceContainer>
                </BudgetSection>
            </Content>
            <QuestionContainer>
                <h4>Alguma dúvida? Mande agora mesmo para sanar qualquer questão</h4>
                <InputContainer>
                    <Input placeholder='Escreva aqui (máx: 300 caracteres)' />
                    <Button text='Enviar' />
                </InputContainer>
            </QuestionContainer>
            <Footer />
        </BudgetContainer>
    )
}
export default Budget;