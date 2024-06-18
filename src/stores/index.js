import { computed, reactive } from "vue";
import { dataEducation } from "@/stores/dataEducation.js";
export const useDataStore = () => {
  const { dataEducationLevel, dataSubEducationLevel } = dataEducation();

  let selectedEducationLevel = reactive({
    idEducationLevel: dataEducationLevel[0].idEducationLevel,
    labelEducationLevel: dataEducationLevel[0].labelEducationLevel,
  });
  let selectedSubEducationLevel = reactive({
    idEducationLevel: dataSubEducationLevel[0].idEducationLevel,
    idSubEducationLevel: dataSubEducationLevel[0].idSubEducationLevel,
    subLevelLabel: dataSubEducationLevel[0].subLevelLabel,
  });

  const getSubEducationLevel = computed(() => {
    if (selectedEducationLevel.idEducationLevel != 0) {
      return dataSubEducationLevel.filter(
        (item) =>
          item.idEducationLevel == selectedEducationLevel.idEducationLevel ||
          item.idEducationLevel == 0
      );
    }
  });

  const mutateSelectedEducationLevel = (idEducationLevel) => {
    const filteredEducationLevel = dataEducationLevel.filter(
      (item) => item.idEducationLevel == idEducationLevel
    );
    
    const isExistFilterEducationLevel = filteredEducationLevel[0]
    if(isExistFilterEducationLevel) {
      selectedEducationLevel.idEducationLevel = isExistFilterEducationLevel.idEducationLevel
      selectedEducationLevel.labelEducationLevel = isExistFilterEducationLevel.labelEducationLevel
    }
    // Reset Selected Sub Education Level
    const isExistSubEducationLevel = selectedSubEducationLevel[0]
    if(isExistSubEducationLevel) {
      selectedSubEducationLevel.idEducationLevel= isExistSubEducationLevel.idEducationLevel
      selectedSubEducationLevel.idSubEducationLevel= isExistSubEducationLevel.idSubEducationLevel
      selectedSubEducationLevel.subLevelLabel= isExistSubEducationLevel.subLevelLabel
    }
  };
  const mutateSelectedSubEducationLevel = (idSubEducationLevel) => {
    const filteredSubEducationLevel = dataSubEducationLevel.filter(
      (item) => item.idSubEducationLevel == idSubEducationLevel
    );

    const isExistFilterSubEducationLevel = filteredSubEducationLevel[0]
    if(isExistFilterSubEducationLevel) {
      selectedSubEducationLevel.idEducationLevel = isExistFilterSubEducationLevel.idEducationLevel
      selectedSubEducationLevel.idSubEducationLevel = isExistFilterSubEducationLevel.idSubEducationLevel
      selectedSubEducationLevel.subLevelLabel = isExistFilterSubEducationLevel.subLevelLabel
    }
  };

  const validationOnSelectSubEducationLevel = () => {
    if (selectedEducationLevel.idEducationLevel == 0) {
      selectedSubEducationLevel.subLevelLabel = "Pilih Jenjangnya Dulu!";
    }
  };

  return {
    // REF
    dataEducationLevel,
    dataSubEducationLevel,
    // REACTIVE
    selectedEducationLevel,
    selectedSubEducationLevel,
    //COMPUTED
    getSubEducationLevel,
    // METHOD
    mutateSelectedEducationLevel,
    mutateSelectedSubEducationLevel,
    validationOnSelectSubEducationLevel,
  };
};
