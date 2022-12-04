import React, { useState } from "react"
import { ProjectCards } from "./projectCards/ProjectCards"
import { ProjectFullDescription } from "./projectFullDescription/ProjectFullDescription"
import { Provide } from "./provide/Provide"
import { RangeSlider } from "./rangeSlider/RangeSlider"

export function Projects({ width }) {
  const [handleValue, setHandleValue] = useState(0)
  const [selectedProjectCard, setSelectedProjectCard] = useState("")
  const [clickOnCard, setClickOnCard] = useState(false)
  const [errorHandleRange, setErrorHandleRange] = useState(false)

  return (
    <div>
      {width > 1024 ? (
        <div className="projects">
          <div className="projects__left_part">
            <h2 className="projects__title">Проекты</h2>
            <div className="projects__filter">
              <RangeSlider
                width={width}
                setHandleValue={setHandleValue}
                handleValue={handleValue}
                setErrorHandleRange={setErrorHandleRange}
                errorHandleRange={errorHandleRange}
              />
              <ProjectCards setSelectedProjectCard={setSelectedProjectCard} handleValue={handleValue} setClickOnCard={setClickOnCard} clickOnCard={clickOnCard} />
            </div>
          </div>
          <div className="projects__right_part">
            {!clickOnCard ? (
              <Provide errorHandleRange={errorHandleRange} />
            ) : (
              <ProjectFullDescription
                width={width}
                selectedProjectCard={selectedProjectCard}
                setClickOnCard={setClickOnCard}
                handleValue={handleValue}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="projects">
          <h2 className="projects__title">Проекты</h2>
          <RangeSlider
            width={width}
            setHandleValue={setHandleValue}
            handleValue={handleValue}
            setErrorHandleRange={setErrorHandleRange}
            errorHandleRange={errorHandleRange}
          />
          <div className="projects__cards_and_description">
            <ProjectCards setSelectedProjectCard={setSelectedProjectCard} handleValue={handleValue} setClickOnCard={setClickOnCard} clickOnCard={clickOnCard} />
            <div className="projects__instuction_and_full_information">
              {!clickOnCard ? (
                <Provide errorHandleRange={errorHandleRange} />
              ) : (
                <ProjectFullDescription
                  width={width}
                  selectedProjectCard={selectedProjectCard}
                  setClickOnCard={setClickOnCard}
                  handleValue={handleValue}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
