import { PrivateField, personal } from '@content';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';

interface ContactInformationProperties {
  privateInformation?: PrivateField[];
}

export default function ContactInformation({
  privateInformation,
}: ContactInformationProperties): ReactNode {
  return (
    <article className="space-y-4">
      <SectionHeading
        Icon={IdentificationIcon}
        level={3}
        text="Contact Information"
      />

      <ul>
        <li>
          <strong>Email:</strong> {personal.email}
        </li>
        <li>
          <strong>Phone:</strong> {personal.phone}
        </li>
        <li>
          <strong>Location:</strong> {personal.location}
        </li>
        <li>
          <strong>Work:</strong> {personal.work}
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href={`https://${personal.linkedin}`}>{personal.linkedin}</a>
        </li>
        <li>
          <strong>Github:</strong> <a href={`https://${personal.github}`}>{personal.github}</a>
        </li>

        {/* private access required */}
        {privateInformation?.map((privateField) => (
          <li className="mt-3" key={privateField.label}>
            <strong>{privateField.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.body.html }} />
          </li>
        ))}
      </ul>
    </article>
  );
}
