const assessmentAccessKey = "vettingo:assessment-access";
const assessmentAccessTtlMs = 10 * 60 * 1000;

type AssessmentAccessGrant = {
  expiresAt: number;
};

export function grantAssessmentAccess() {
  const grant: AssessmentAccessGrant = {
    expiresAt: Date.now() + assessmentAccessTtlMs,
  };

  window.sessionStorage.setItem(assessmentAccessKey, JSON.stringify(grant));
}

export function hasAssessmentAccess() {
  const storedGrant = window.sessionStorage.getItem(assessmentAccessKey);

  if (!storedGrant) {
    return false;
  }

  try {
    const grant = JSON.parse(storedGrant) as AssessmentAccessGrant;
    const isValid = Number.isFinite(grant.expiresAt) && grant.expiresAt > Date.now();

    if (!isValid) {
      revokeAssessmentAccess();
    }

    return isValid;
  } catch {
    revokeAssessmentAccess();
    return false;
  }
}

export function revokeAssessmentAccess() {
  window.sessionStorage.removeItem(assessmentAccessKey);
}
